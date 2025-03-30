import { Middleware } from "@reduxjs/toolkit";


export const loggerMiddleware : Middleware = (storeAPI) => (next) => (action) => {

    console.log("Dispatching:",action);


    const result = next(action);


    console.log("New State",storeAPI.getState());


    return result;

}


export const authMiddleware:Middleware = (storeAPI) => (next) => (action:any) => {

    if(action.type === "auth/logout"){

        console.log("User logged out, clearing state....");
    

        localStorage.removeItem("persistedState");

    }

    return next(action);
}