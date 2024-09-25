import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk("createUser",async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch("https://66f361f471c84d8058788a0c.mockapi.io/crud",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      console.log("result after fetching sucessfully:",result)
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
//delete action

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) =>{
        state.loading = true
    });
    builder.addCase(createUser.fulfilled, (state, action)=>{
        state.loading = false
        state.users.push(action.payload)
    });
    builder.addCase(createUser.rejected, (state,action)=>{
        state.loading = false
        state.error = action.payload.message
    });
  },
});

export default userDetail.reducer;