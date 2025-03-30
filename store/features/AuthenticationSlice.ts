import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface AuthState{

    user:{

        id:string;

        name:string;

        email:string;

        token:string;

    } | null;

    isAuthenticated:boolean

}

const initialState : AuthState = {

    user:null,

    isAuthenticated:false,


}


const authSlice = createSlice({

    name:"auth",

    initialState,

    reducers:{

        login:(state,action:PayloadAction<AuthState["user"]>)=>{

            state.user = action.payload;

            state.isAuthenticated = true;

        },

        logout:(state) =>{

            state.user = null;

            state.isAuthenticated = false;

        }

    }

})


export const { login,logout } = authSlice.actions;

export default authSlice;