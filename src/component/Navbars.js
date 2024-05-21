import React from 'react';
import { useState } from 'react';
// import {a} from "react-router-dom"



export function Navbars(props) {
 
  const [c, setc] = useState("black");

 



const ss1Update=()=>{
   
  if(c==="black")
    {
setc("white");
    }
    else{
      setc("black");
    }

};




  return (
   
    
   <nav class={`navbar bg-${props.mode} border-bothrefm border-body`} data-bs-theme="light" >
   <div className="container-fluid">
    <a className="navbar-brand" href="#"  style={{color:c}}>{props.title}</a>
    
   
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0"  style={{color:c}}>
        <li className="nav-item" >
          <a className="nav-a active" aria-current="page" href="#"  style={{color:c}}>Home</a>
        </li>
        <li className="nav-item"  style={{color:c}}>
          <a className="nav-a" href="#"  style={{color:c}}>about</a>
        </li>
      </ul>
      <div class="form-check form-switch" >
  <input onClick={()=>{props.toggleMode(); ss1Update();}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={{color:c}}  >DarkMode</label>
</div>
    </div>
  
</nav>
   
    
  
  );
}


