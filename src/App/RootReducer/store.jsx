



// const { configureStore } = require('@reduxjs/toolkit');
// const { default: reducer } = require('../../features/Counter/CounterSlice');

import { configureStore } from "@reduxjs/toolkit";
import InterviewCalendarReducer from "../../components/Main/components/Dashboard/RightSideMenu/InterviewSlice";
// import userReducer from "../../features/Auth/userSlice";
import CandidateReducer from "../../features/Candidate/CandidateSlice";
import LoadingReducer from "../../features/Counter/LoggedSlice";
import DateReducer from "../../features/Filter/FilterSlice";

// import register from "../../features/Auth/userSlice";
// import reducer from "../../features/Counter/LoggedSlice";


const RootReducer ={

    database : CandidateReducer,
    // user : userReducer,
    loading: LoadingReducer,
    dateRange: DateReducer,
    interviewCalendar: InterviewCalendarReducer, 

}


const store = configureStore({
    reducer: RootReducer,
})


export default store ;