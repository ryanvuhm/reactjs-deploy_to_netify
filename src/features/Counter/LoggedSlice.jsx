import { createSlice } from "@reduxjs/toolkit";





const loggedSlice = createSlice({

    name : "loading",
    initialState: false,

    reducers: {

        status(state){


            return !state;
        },
 

    }

})


const {actions, reducer} = loggedSlice;

export const {status} = actions;

export default reducer;