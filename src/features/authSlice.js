import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";

const BASE_URL = "http://localhost:9000/letswork";
// Asynchronous thunk for user login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/create/session`,
        credentials
      );
      return response.data; // Return token or user details
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to log in"
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/api/register/data`,
        body
      );
      return response.data; // Return token or user details
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to log in"
      );
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verify",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/api/user/otp/varify`,
        body
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to Verify"
      );
    }
  }
);

// Asynchronous thunk for fetching authenticated user details
export const fetchAuthUser = createAsyncThunk(
  "auth/fetchAuthUser",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // Get token from state
      const response = await axios.get(`${BASE_URL}/user/api/all/data`, {
        headers: { Authorization: `${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch authenticated user"
      );
    }
  }
);

// Asynchronous thunk for fetching authenticated user details
export const SingleUser = createAsyncThunk(
  "auth/SingleUser",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // Get token from state
      const response = await axios.get(
        `${BASE_URL}/user/api/user/fetch/${id}`,
        {
          headers: { Authorization: `${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch authenticated user"
      );
    }
  }
);

// Asynchronous thunk for fetching authenticated user details
export const resend = createAsyncThunk(
  "auth/fetchAuthUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/api/user/otp/resend`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to resend OTP"
      );
    }
  }
);

export const performLogout = createAsyncThunk(
  "auth/performLogout",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // Get token from state
      console.log("logout token", token);
      const response = await axios.get(`${BASE_URL}/auth/logout`, {
        headers: { Authorization: `${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to log out"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Authenticated user details
    token: null, // JWT token
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    verify: false,
    clients: null,
    tempUser: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      cookie.remove("token");
      cookie.remove("id");
    },
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      const { user } = action.payload;
      if (user) {
        cookie.set("id", JSON.stringify(user?._id), { expires: 7 });
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token; // Assuming response includes token

        state.user = action.payload.user; // Assuming response includes user details
        cookie.set("token", action.payload.token, { expires: 7 });
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // registration
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "200";
        state.token = action.payload.token; // Assuming response includes token
        state.user = action.payload.user; // Assuming response includes user details
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // for the verify
      .addCase(verifyOTP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyOTP.fulfilled, (state) => {
        state.status = "200";
        state.verify = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.status = "201";
        state.error = action.payload.error; // Save the error in state
        console.error("OTP verification failed:", action.payload);
      })

      // for the fetch user
      .addCase(fetchAuthUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.status = "200";
        state.clients = action.payload;
      })
      .addCase(fetchAuthUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // for the SingleUser user
      .addCase(SingleUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SingleUser.fulfilled, (state, action) => {
        state.status = "200";
        state.tempUser = action.payload;
      })
      .addCase(SingleUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
