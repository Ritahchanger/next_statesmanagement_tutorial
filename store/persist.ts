export const loadState = () =>  {

    try{


        const serializedState = localStorage.getItem("persistedState");

        return serializedState ? JSON.parse(serializedState) : undefined;


    }catch(error){

        return undefined;

    }


}

export const saveState = (state:any) => {


    try{

        const serializedState = JSON.stringify(state);

        localStorage.setItem("persistedState",serializedState);


    }catch(err){

        console.error("Could not save state:", err);

    }

}