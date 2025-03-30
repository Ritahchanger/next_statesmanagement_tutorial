import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IPost, IPostStates } from "@/types/post";



const url = `https://jsonplaceholder.typicode.com/posts`


export const fetchPosts = createAsyncThunk("fetch/posts",async()=>{

    const response = await fetch(url);

    return response.json();

});

export const fetchSinglePosts = createAsyncThunk("fetch/posts/single",async(id:number)=>{


    const response = await fetch(`${url}/${id}`);

    return response.json();

})

const initialState : IPostStates = {

    posts:[],

    status:'loading',

    singlePost:null,

    error:null

}

const postSlice = createSlice({

    name:'posts',

    initialState,

    reducers:{},

    extraReducers:(builder)=>{

        builder

        // fetching multiple posts

        .addCase(fetchPosts.pending, (state)=>{

            state.status = 'loading';

            state.error = null;

        })
        .addCase(fetchPosts.fulfilled, (state,action:PayloadAction<IPost[]>)=>{

            state.status = 'succeeded';

            state.posts = action.payload;

            state.error = null;

        })
        .addCase(fetchPosts.rejected, (state,action)=>{

            state.status = 'failed';

            state.error = action.error.message ?? "something went wrong"

        })

        // fetching single posts

        .addCase(fetchSinglePosts.pending, (state)=>{

            state.status = 'loading';

            state.error = null;

        })
        .addCase(fetchSinglePosts.fulfilled, (state,action:PayloadAction<IPost>)=>{

            state.status = 'succeeded';

            state.singlePost = action.payload;

            state.error = null;

        })
        .addCase(fetchSinglePosts.rejected, (state,action)=>{

            state.status = 'failed';

            state.error = action.error.message ?? "something went wrong"

        })

    }

})


export default postSlice;