import React ,{useState} from 'react';


export default function TextForm(props) {
  


  

  const changeTolowerCase = ()=>{
    let newText=text.toLowerCase();
setText(newText);
props.showAlart('Success','Changed To LowerCase');
  }
  const handelOnChange = (event)=>{
setText(event.target.value);
  }
  const changeToUpperCase = ()=>{
let newText=text.toUpperCase();
setText(newText);
props.showAlart('Success','Changed To UpperCase');
  }
  const [restore, setrestore] = useState("");
  const clearAll=()=>{
   setrestore(text);
    let newText="";
    setText(newText);
    props.showAlart('Success','Cleared All');
  }
  const restoreAll=()=>{
    let newText=restore;
setText(newText);
props.showAlart('Success','Restored All');
  }
  const[text,setText]=useState("enter the data");
  return (
    <>

    <div style={{backgroundColor:props.mode==='dark'?'#65a3ba':'white',color:props.mode==='dark'?'white':'black',height:90+'vh',width:100+'vw' ,marginUp:5+'px'}}>

    <h1>enter the data</h1>
    <div style={{marginLeft:10+'vw'}}>
      <textarea className="textarea" id="areaid" onChange={handelOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'#7498a6':'white',color:props.mode==='dark'?'black':'black',width:80+'vw',minHeight:40+'vh',marginleft:10+'vw',borderRadius:5+'px',borderColor:props.mode==='light'?'black':'white'}} ></textarea>
    </div>
    <div classNme="b1">

    

      <button onClick={changeToUpperCase} style={{color:props.mode==='dark'?'white':'black',backgroundColor:'#51b2bd',marginRight:2+'px',marginLeft:30+'vw'}}>change to upper case</button>
    <button onClick={changeTolowerCase} style={{color:props.mode==='dark'?'white':'black',backgroundColor:'green',marginRight:2+'px'}}>change to upper case</button>
    <button onClick={clearAll} style={{color:props.mode==='dark'?'white':'black',backgroundColor:'red',marginRight:2+'px'}}>Clear all</button>
    <button onClick={restoreAll} style={{color:props.mode==='dark'?'white':'black',backgroundColor:'yellow',marginRight:2+'px'}}>Restore</button>

    <h3 >you text summary</h3>
    <h4 >{text.split(" ").length} Words and {text.length} chareters</h4>
    <h4 >{(text.split(" ").length-1)*(0.192/60)} Minutes</h4>

    </div>
   

    </div>
  
    </>
  );
  
}
