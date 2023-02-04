import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/contact';


function App() {
  const [displayMode, setMode] = useState('light');
  //whether dark mode is enabled or not

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
  }
  

  const removeButtonClasses = (btsClass)=>{
    document.querySelectorAll('button').forEach(element=>{
      element.classList.remove('btn-light');
      element.classList.remove('btn-dark');
      element.classList.remove('btn-success');
      element.classList.remove('btn-warning');
      element.classList.remove('btn-primary');
      element.classList.remove('btn-danger');
      element.classList.remove('btn-primary');
    })
    document.querySelectorAll('button').forEach(element=>{
      element.style.border=('1px solid black');
      element.style.color=('black');
    })
  }
  const toggleMode = (btsClass) => {
    removeBodyClasses();
    if(btsClass!=null){
      // document.body.classList.add('bg-'+btsClass);
      removeButtonClasses(btsClass);
      document.querySelectorAll('button').forEach(element => {
        element.classList.add('btn-'+btsClass);
      });
    }
    else{
    if (displayMode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark mode has been Enabled', 'success');
      document.title = "Text Utils 🖤";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = "Text Utils 🤍"
    }
  }
  }

  const [alert, setAlert] = useState(null); //alert is an object

  //showAlert is a function/method to set alert from null to a particular value
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const setTheme = () => {
    if(document.getElementById('colorSelector').value === '#000000'){
      document.getElementById('colorSelector').value= '#8a98d0';
    }
    document.body.style.backgroundColor = document.getElementById('colorSelector').value + 60;
    document.querySelectorAll('.btn').forEach((element) => {
      element.style.backgroundColor = document.getElementById('colorSelector').value;
      document.querySelectorAll('.colorthemes').forEach(element=>{
        element.style.visibility=('hidden');
      })
    });
  }

  return (
    <>
    <Router>
    <Navbar title="Text Utils" mode={displayMode} toggleMode={toggleMode} setTheme={setTheme} />
    <Alert alert={alert} />
    <div className="container">
      <Routes>
        <Route path='/' element={<TextForm heading="TextUtils - Word Counter, Char Counter, Remove Extra Spaces" mode={displayMode} showAlert={showAlert} />}></Route>
        <Route path='/about' element={<About mode={displayMode} />}></Route>
        <Route path='/contact' element={<Contact title="Hey There"/>}></Route>
      </Routes>
    </div>
    </Router>
    </>
  );

}

export default App;
