import { createSlice } from "@reduxjs/toolkit";


import { auth,db  } from "../../firebaseConntect";


const mockupDataSlice = createSlice({
  name: "database",
  initialState: {},

  reducers: {
    register(email,password) {
      
      return  auth.createUserWithEmailAndPassword(email,password);

        
    }
  }
});


const { actions, reducer } = mockupDataSlice;

export const { register } = actions;

export default reducer;
