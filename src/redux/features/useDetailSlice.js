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
export const deleteUser = createAsyncThunk("deleteUser", async(id,{ rejectWithValue })=>{//here were are getting id(passed as an argument)
    const response = await fetch(`https://66f361f471c84d8058788a0c.mockapi.io/crud/${id}`,
        {method: "DELETE"}   
    );//this is DELETE API call, it will deltethe user with this id in the backend. Promises is for Frontend here

    try {
       const result = await response.json();
       console.log("result after DELETE API call:", result);
       return result; 
    } catch (error) {
        return rejectWithValue(error);
    }
});

//update action
export const updateUser = createAsyncThunk("updateUser", async(data,{ rejectWithValue })=>{//here were are getting user to be update data
    console.log("data to be edited ", data);
    const response = await fetch(`https://66f361f471c84d8058788a0c.mockapi.io/crud/${data.id}`,
    {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
       const result = await response.json();
       console.log("result after Edit API call:", result);
       return result; 
    } catch (error) {
        return rejectWithValue(error);
    }
});


export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) =>{
        state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {//We'll handle PROMISE here
    //For create user
    builder.addCase(createUser.pending, (state) =>{
        state.loading = true
    });
    builder.addCase(createUser.fulfilled, (state, action)=>{
        state.loading = false
        state.users.push(action.payload);//add your new data (i.e payload by action) in to the existing data
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

    //For delete user
    builder.addCase(deleteUser.pending, (state) =>{
        state.loading = true
    });
    builder.addCase(deleteUser.fulfilled, (state, action)=>{
        state.loading = false;
        const {id} = action.payload;//taking id from "action.payload"
       if(id){
        state.users = state.users.filter((ele)=> ele.id !== id);//filter logic to delete user with id.
       }
    });
    builder.addCase(deleteUser.rejected, (state,action)=>{
        state.loading = false
        state.error = action.payload.message;
    });

    //For Update user
    builder.addCase(updateUser.pending, (state) =>{
        state.loading = true
    });
    builder.addCase(updateUser.fulfilled, (state, action)=>{
        state.loading = false;
        console.log("action.payload in edit:",action.payload);
        state.users = state.users.map((ele)=>{
            return ele.id === action.payload.id ? action.payload : ele;//if coming user id is matching, then update that user with new values or it will be same data(ele)
        }) 
    });
    builder.addCase(updateUser.rejected, (state,action)=>{
        state.loading = false
        state.error = action.payload.message
    });

  },
});

export default userDetail.reducer;

//the way to export reducers
export const {searchUser} = userDetail.actions;