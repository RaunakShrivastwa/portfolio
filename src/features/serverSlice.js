import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";

const BASE_URL = "http://localhost:9000/letswork";

// Async thunk for populating a user
export const populateUser = createAsyncThunk(
  "projects/populateUser",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/test`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch user"
      );
    }
  }
);


const projectSlice = createSlice({
  name: "projects",
  initialState: {
   
    serverStatus: "idle",
    error: null,
  },
  reducers: {
    setInfo: (state, action) => {
      state.user = action.payload.info;
    },
  },
  extraReducers: (builder) => {
    builder
     
      // Populate User
      .addCase(populateUser.pending, (state) => {
        state.serverStatus = "loading";
      })
      .addCase(populateUser.fulfilled, (state, action) => {
        state.serverStatus = "200";
        state.user = action.payload.user;
      })
      .addCase(populateUser.rejected, (state, action) => {
        state.serverStatus = "failed";
        state.error = action.payload;
      })
  },
});

export const { setInfo } = projectSlice.actions;
export default projectSlice.reducer;
