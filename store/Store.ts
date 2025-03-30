import { configureStore } from "@reduxjs/toolkit";


import counterSlice from "./features/counterSlice";

import postSlice from "./features/postsSlice";
import authSlice from "./features/AuthenticationSlice";


const store = configureStore({


    reducer:{

        counter:counterSlice.reducer,

        posts:postSlice.reducer,

        auth:authSlice.reducer

    }


})

export default store;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

