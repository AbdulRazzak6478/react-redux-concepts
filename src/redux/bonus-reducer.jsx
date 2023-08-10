
import { types } from "./types";


//bonus reducer
export function bonusReducer (state = { points :1},action)
{
    switch(action.type)
    {
        case types.increment_type:
            return {...state,points:state.points+1}
        case types.starting_bonus_type:
            if(action.payload >= 35000)
                return {...state, points :state.points + action.payload};
        default : 
            return state;
    }
}