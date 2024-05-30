import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      return response.json();
    }
  );
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = true;
    });
  },
});

const usersSliceReducer = userSlice.reducer;
export default usersSliceReducer;
