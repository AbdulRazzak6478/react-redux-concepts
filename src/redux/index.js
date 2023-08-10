import { types } from "./types.jsx"
import axios from "axios";
import {  createStore,applyMiddleware ,combineReducers} from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { accountsReducer } from "./account-reducer.jsx";
import { bonusReducer } from "./bonus-reducer.jsx";



export const store = createStore( 
    combineReducers({
        accounts:accountsReducer,
        bonus:bonusReducer,
    }),
    applyMiddleware(logger.default,thunk));


console.log(store.getState());
// console.log(store.dispatch(increment_action()));



// action triggers
function init_action2(id)
{
    return async (dispatch,getState)=>{
        try{
            dispatch(GetUserAccountPending())
            const {data} = await axios.get(`http://localhost:8080/accounts/${id}`);
            dispatch(GetUserAccountFulFilled(data.amount));
        }
        catch(error)
        {
            dispatch(GetUserAccountRejected(error.message))
        }
    }
}
function initial_bonus_action(value)
{
    return {type : types.starting_bonus_type,payload:value};
}
function GetUserAccountFulFilled(value)
{
    return {type : types.getUserAccFulFilled, payload:value};
}

function GetUserAccountPending()
{
    return {type : types.getUserAccPending};
}
function GetUserAccountRejected(error)
{
    return {type : types.getUserAccRejected, error:error};
}
function initUser(value)
{
    // return {type:init_type,payload:value}
    return {type:types.getUserAccFulFilled,payload:value}
}
function increment_action()
{
    return {type:types.increment_type};
}
function decrement_action()
{
    return {type:types.decrement_type};
}
function multiplyByPayload_action(payload)
{
    return {type:types.multiplyBy10_type,payload};
}

export const actions = {
    init_action2,
    initial_bonus_action,
    GetUserAccountFulFilled,
    GetUserAccountPending,
    GetUserAccountRejected,
    initUser,
    increment_action,
    decrement_action,
    multiplyByPayload_action
}
