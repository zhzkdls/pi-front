import { createStore } from "redux";


export default createStore(function(state, action){
    if(state=== undefined || 0 || ''){
        return {id : ''}
    }
    if(state=== 'login'){
        return {...state, id : action.id}
    }
    if(state=== 'logout'){
        return {...state, id : ''}
    }

    return state;
})