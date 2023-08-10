import {types} from './types'


// Accounts reducer

export function accountsReducer (state = {amount:1},action){

    switch(action.type)
    {
        case types.init_type:
            return {...state,amount:action.payload};
        case types.getUserAccFulFilled:
            return  {...state,amount:action.payload, pending : false};
        case types.getUserAccPending:
            return  {...state,pending: true};
        case types.getUserAccRejected:
            return  {...state, error : action.error, pending : false};
        case types.increment_type:
            return {...state,amount:state.amount+1};
        case types.decrement_type:
            return {...state,amount:state.amount-1};
        case types.multiplyBy10_type:
            return {...state,amount:state.amount+action.payload};   
        default:
            return state; 
    }
}