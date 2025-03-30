interface IPost{

    userId:number;

    id:number;

    title:string;

    body:string;

}


interface IPostStates{

    posts:IPost[],


    singlePost:IPost | null

    status:'loading' | 'succeeded' | 'failed',

    error:null | string;

}



export type { IPost,IPostStates }