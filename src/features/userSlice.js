import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Asynchronous thunk for fetching users
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data; // Data to populate state
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch users"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    // Optional synchronous actions
    clearUsers: (state) => {
      state.users = [];
    },
    postUser:(state)=>{
        state.users=[{name:"jitendra",id:1}]
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearUsers,postUser } = userSlice.actions;
export default userSlice.reducer;
