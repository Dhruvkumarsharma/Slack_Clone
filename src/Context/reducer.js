import { initialState } from "./initialState";

export const actionType = "SET_USER";


export const addUser = (user) =>{
    return {
        type:actionType,
        payload: {
            user:user,
        },
    };
};


const reducer = ( state = initialState, action ) => {
    console.log(action);
    switch(action.type){
        case actionType:
            return {
                ...state,
                user : action.payload.user,
            };
        default:
            return state;
    }
};

export default reducer;