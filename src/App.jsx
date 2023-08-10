// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {useSelector } from "react-redux"
import Accounts from "./components/Accounts";
import Bonus from "./components/Bonus";
import { store } from './redux/index.js';
function App() {
   
  // const [amount,setAmount] = useState(0);
  // const [points,setPoints] = useState(0)
  const amount= useSelector(state=>state.accounts.amount);
  const points=useSelector(state=>state.bonus.points);
  const accounts=useSelector(state=>state.accounts);

  return (
    <>
      <div className="box">
        <div className="title">App</div>
        <div className="account-result layer">
          {
            accounts.pending ? <p>Loading</p> :accounts.error ? <p>{accounts.error}</p>: <p>Current Amount : {amount} </p>
          }
        </div>
        <div className="bonus-result layer">
          Total Bonus: {points}
        </div>
      </div>
      <div className="border">
        <Accounts amount={amount} />
        <Bonus points={points}/>
      </div>
    </>
  );
}

export default App;
