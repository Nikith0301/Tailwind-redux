// import{createStore} from "redux"

// const initialState={


//     balance:120,
//     fullName:"luffy",
//     mobile:78831513
// }

// function accountReducer(state=initialState,action){


//     switch(action.type){
//         case "deposit":
//           return  {...state,balance:state.balance+ +action.payload}

//         case "withdraw":
//             return {...state,balance:state.balance- +action.payload}  
//         case "mobileUpdate":
//             return{...state,mobile:action.payload}
//         case "nameUpdate":
//             return{...state,fullName:action.payload}    
//         default:
//             return state    

//     }
// }



// const store=   createStore(accountReducer)

// console.log(store.getState())

// store.dispatch({type:"deposit",payload:4567})
// store.dispatch({type:"withdraw",payload:1000})
// store.dispatch({type:"mobileUpdate",payload:7032893967})
// store.dispatch({type:"nameUpdate",payload:"joyboy"})
// console.log(store.getState())

// export default store;


import { createSlice, configureStore } from "@reduxjs/toolkit";

const start = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: start,
  reducers: {
    updateMobile: (state, action) => {
      state.mobile = action.payload;
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    deposit: (state, action) => {
      state.balance += +action.payload;
    },
    reset: (state) => {
      return {
        balance: 0,
        fullName: "",
        mobile: null,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;

export const { updateMobile, updateName, withdraw, deposit, reset } =
  userSlice.actions;