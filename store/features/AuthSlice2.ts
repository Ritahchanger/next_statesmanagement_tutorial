import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState{

    user:{

        id:string;

        name:string;

        email:string;

        token:string;

    } | null

    isAuthenticated:boolean;

    loading:boolean;

    error:string | null;


}

const initialState : AuthState = {

    user:null,

    isAuthenticated:false,

    loading:false,

    error:null,

}

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials:{email:string; password:string},{rejectWithValue})=>{

    try{

        const response = await fetch("/api/auth/login",{


            method:"POST",

            body:JSON.stringify(credentials),

            headers:{"Content-Type":"application/json"}
        });

        if(!response.ok) throw new Error("Invalid credentials")

        return await response.json();

    }catch(error:any){

        return rejectWithValue(error.message)

    }


})

const authSlice = createSlice({

    name:"auth",

    initialState,

    reducers:{

        logout:function(state){

            state.user = null;

            state.isAuthenticated = false;

        }

    },

    extraReducers:function(builder){

        builder

        .addCase(loginUser.pending, (state)=>{


            state.loading = true;

            state.error = null;

        })

        .addCase(loginUser.fulfilled,(state,action:PayloadAction<AuthState["user"]>)=>{

            state.user = action.payload;

            state.isAuthenticated = true;

            state.loading = false;

        })

        .addCase(loginUser.rejected,(state,action:PayloadAction<any>)=>{

            state.error = action.payload;

            state.loading = false;


        });

    },

});


export const { logout  } = authSlice.actions;

export default authSlice.reducer