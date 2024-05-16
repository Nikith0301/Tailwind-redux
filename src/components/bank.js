// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = {
//     balance: 430,
//     fullName: "Bajrang",
//     mobile: 78879987
// };

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         updateMobile: (state, action) => {
//             state.mobile = action.payload;
//         },
//         updateName: (state, action) => {
//             state.fullName = action.payload;
//         },
//         deposit: (state, action) => {
//             state.balance += Number(action.payload);
//         },
//         withdraw: (state, action) => {
//             state.balance -= Number(action.payload);
//         }
//     }
// });

// const bank = configureStore({
//     reducer: {
//         user: userSlice.reducer
//     }
// });

// export default bank;
// export const { updateMobile, updateName, withdraw, deposit, reset } =
//   userSlice.actions;

import { createSlice,configureStore } from "@reduxjs/toolkit"

const start={
    name:"haneet",
    balance:396,
    mobile:"75141"
}

const accountSlice=createSlice({
    name:"account",
    initialState:start,
    reducers:{
        withdraw:(state,action)=>{
            state.balance-=+action.payload
        },
        deposit:(state,action)=>{
            state.balance+=+action.payload
        },
        updateName:(state,action)=>{
            state.fullName=action.payload
        },
        updateMobile:(state,action)=>{
            state.mobile=action.payload
        },
        reset:(state,action)=>{
            return {
                balance: 0,
                fullName: "",
                mobile: null,
              };
        }

    }
})

let transactions=[];
const transactionSlice=createSlice({

    name:"transaction",
    initialState:transactions,
    reducers:{
        addTransaction:(state,action)=>{
            state.push(action.payload)
        }
    }
})

const bank=configureStore({
    reducer:{
        account:accountSlice.reducer,
        transaction:transactionSlice.reducer
    }
})
export default bank;
export const { updateMobile, updateName, withdraw, deposit, reset } =
  accountSlice.actions;
export const {addTransaction}=transactionSlice.actions;
