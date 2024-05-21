
import './App.css'
import { Navbars } from './component/Navbars';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alart from './component/Alart';
import About from './component/About';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  const toggleMode=()=>{
    if(mode==='dark')
      {
        setMode('light');
        showAlart('Success','Dark mode disabled');
        
      }
      else{
        setMode('dark');
        showAlart("Success","Dark mode enabled");
        
      }
  }

  const [mode,setMode]=useState('light');
  const [alart, setalart] = useState(null);
  const showAlart=(done,message)=>{
    setalart({
      message:message,
    done:done
    });
    setTimeout(()=>{setalart(null)},1500);
  }
  return (
 <>
 
 <Navbars title="TextUtils"  mode={mode}  toggleMode={toggleMode} />
 <Alart alart={alart}/>

 <TextForm  mode={mode} showAlart={showAlart}/>
 
 </>
  );
}

export default App;

