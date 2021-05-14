import { createSlice } from "@reduxjs/toolkit";





const FilterSlice = createSlice({

    name : "dateRange",
    initialState: {
        date: [],
        position: ""
    },

    reducers: {

        updateDateRange(state,action){


            state.date = action.payload;
        },
        
        updatePosition(state,action){


            state.position = action.payload;
        },
 

    }

})


const {actions, reducer} = FilterSlice;

export const {updateDateRange,updatePosition} = actions;

export default reducer;