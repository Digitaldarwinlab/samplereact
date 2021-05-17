import React  , { Component } from 'react'
import "./App.css";
import {inscrementNumber} from "./action";
import {drecNumber} from "./action";
import {notNull} from "./action";
import { useSelector, useDispatch } from "react-redux";
let lang;
    const userInput =(e)=>{
         console.log(e.target.value);
    
         lang= e.target.value;
    };
    const namev=lang;
    console.log(namev);
const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const checkNotNull = useSelector(state => state.checkNotNull);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(drecNumber())}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <a class="quantity__plus" title="Increment" onClick={() => dispatch(inscrementNumber(5))}><span>+</span></a>
     <br />
    
        
      </div>
      <div class="quantity">

<label htmlFor="language">Prefered Language</label><br />
<input type="text" name="name"  onChange={userInput} />
<input type="text" name="name1"  value={namev} />
<a onClick={(namev) => dispatch(notNull(namev))}>hjhjh</a>
</div>
          </div>
        </div>
       
    </>
  )
}

export default AppBackup