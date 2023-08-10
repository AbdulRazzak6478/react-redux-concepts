import React from 'react'
import {useDispatch} from "react-redux";
import { actions } from '../redux';

const Bonus = ({points}) => {
  const dispatch = useDispatch();
  return (
   <>  
    <div className="bonus-card card">
        <div className="name">Bonus Component</div>
        <p className='amount'>Total point : {points}</p>
          <button className='btn' onClick={()=>dispatch(actions.increment_action())}>Increment + </button>
      </div>
   </>
  )
}

export default Bonus;