import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
})

export default userDetails.reducer;