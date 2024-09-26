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
      return result;//this will return a PROMISE
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const showUser = createAsyncThunk("showUSer", async(_,{ rejectWithValue })=>{//we need to pass "_" for any argumnets to be dispatched.
    //your function must be structured to accept it, even if you don’t plan to use it.
    console.log("inside showUSer");
    const response = await fetch("https://66f361f471c84d8058788a0c.mockapi.io/crud");//no need to write for GET endpoint

    try {
       const result = await response.json();
       console.log("result after API call:", result);
       return result; 
    } catch (error) {
        return rejectWithValue(error);
    }
});

//delete action



export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {//We'll handle PROMISE here
    //For create user
    builder.addCase(createUser.pending, (state) =>{
        state.loading = true
    });
    builder.addCase(createUser.fulfilled, (state, action)=>{
        state.loading = false
        state.users.push(action.payload);//add your new data (i.e payload by action) in tot he existing data
    });
    builder.addCase(createUser.rejected, (state,action)=>{
        state.loading = false
        state.error = action.payload.message
    });

    //For read user
    builder.addCase(showUser.pending, (state) =>{
        state.loading = true
    });
    builder.addCase(showUser.fulfilled, (state, action)=>{
        state.loading = false
        state.users = action.payload;//put all your present(all data will be there) data in "users"
    });
    builder.addCase(showUser.rejected, (state,action)=>{
        state.loading = false
        state.error = action.payload.message;
    });

    //For Edit user
    //For delete user
  },
});

export default userDetail.reducer;