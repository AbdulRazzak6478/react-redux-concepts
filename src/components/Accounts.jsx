import React, { useState } from "react";
import "../styles/Accounts.css";
import {useSelector ,useDispatch} from "react-redux";
import { actions, store } from "../redux";
const Accounts = ({amount}) => {
  const [amt, setAmt] = useState("");
  const dispatch= useDispatch();
  // function increment() {
  //   setAmount((prevstate) => prevstate + 1);
  // }
  // function decrement() {}
  function trigger_action() {
    // setAmount((prevState)=>prevState + (+amt));
    dispatch(actions.multiplyByPayload_action(+amt))
    setAmt("");
  }
 function init()
  {
    dispatch(actions.init_action2(3));
    // dispatch(actions.initUser(amt))
    setAmt('')
  }
  return (
    <>
      <div className="card border">
        <div className="name">Account Component</div>
        <p className="amount">Amount : $ { amount}</p>
        <div className="btns">
          <button className="btn"
          //  onClick={increment}
          // onClick={()=>store.dispatch(actions.increment_action())}
          onClick={()=>dispatch(actions.increment_action())}
          
          >
            Increment +{" "}
          </button>
          <button
            className="btn"
            // onClick={() => setAmount((prevstate) => prevstate - 1)}
            // onClick={()=>store.dispatch(actions.decrement_action())}
            onClick={()=>dispatch(actions.decrement_action())}
          >
            Decrement -{" "}
          </button>
          <input
            className="incre"
            type="text"
            value={amt}
            onChange={(e) => setAmt(e.target.value)}
            placeholder="Enter Value"
            autoFocus
          />
          <button className="btn" onClick={trigger_action}>
            Increment By {amt.length==0 ?0:amt} +
          </button>
          <button className="btn"
          //  onClick={()=>dispatch(actions.init_action2(amt))}
           onClick={init}
          // onClick={()=>dispatch(actions.initUser(amt))}
           >
            Get user amount
          </button>
        </div>
      </div>
    </>
  );
};

export default Accounts;
