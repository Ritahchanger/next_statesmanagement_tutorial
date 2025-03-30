import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    counter:0

}

const counterSlice = createSlice({

    name:"counter",

    initialState,

    reducers:{

        decrementCounter:(state)=>{

            state.counter -= 1

        },

        incrementCounter:(state)=>{

            state.counter += 1
        }


    }

})

export const { decrementCounter,incrementCounter } = counterSlice.actions;



export default counterSlice;