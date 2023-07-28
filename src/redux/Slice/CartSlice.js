import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice(
    {
        name:"Cart",
        initialState:[],
        reducers:{
            add:(state,action)=>{
                state.push(action.payload)//action .payload gives parameter

            },//state defines the array Cart and action the parameters provided in the function
            remove:(state,action)=>{
                return state.filter((item)=>item.id!==action.payload);
            },

        }
    }
   )
   export const{add,remove}=CartSlice.actions;
   export default CartSlice.reducer; 

