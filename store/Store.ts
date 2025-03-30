import { configureStore } from "@reduxjs/toolkit";


import counterSlice from "./features/counterSlice";

import postSlice from "./features/postsSlice";


import authSlice from "./features/AuthenticationSlice";


import { loadState,saveState } from "./persist";
import { authMiddleware, loggerMiddleware } from "./middlewares/Middleware";

const store = configureStore({


    reducer:{

        counter:counterSlice.reducer,

        posts:postSlice.reducer,

        auth:authSlice.reducer

    },

    preloadedstate:loadState(),

    middleware:(getDefaultMiddleware) =>{

        getDefaultMiddleware().concat(loggerMiddleware, authMiddleware)

    }


})


store.subscribe(()=>{

    saveState(store.getState())

})



export default store;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

