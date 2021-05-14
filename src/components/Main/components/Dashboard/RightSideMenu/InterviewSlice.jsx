import { createSlice } from "@reduxjs/toolkit";





const InterviewSlice = createSlice({

    name : "interviewCalendar",
    initialState: {
        interviewCalendar: [],
    
    },

    reducers: {

        updateInterviewCalendar(state,action){


            state.interviewCalendar = action.payload;
        },
      
 

    }

})


const {actions, reducer} = InterviewSlice;

export const {updateInterviewCalendar} = actions;

export default reducer;