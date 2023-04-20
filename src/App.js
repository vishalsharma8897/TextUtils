/// in app.js file we are gonna write all the names of components we are using in app;
import React, { useState } from 'react'

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";




/// A function to run when switch is used;


// all the components are here to handle;
export default function App() {

  const [alert, setAlert] = useState(null);
  const [alertTimeout, setAlertTimeout] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    const timeout = setTimeout(() => {
      setAlert(null);
    }, 2000);

    setAlertTimeout(timeout);
  };


  const [theme, setTheme] = useState("light");

   function toggleMode(myTheme) {
    if (myTheme !== "white") {
       setTheme(myTheme);
      document.body.style.backgroundColor = myTheme;
      document.body.style.color = "white";
      console.log(myTheme);
      showAlert(myTheme + " enabled successfully", "Success");
    } else {
       setTheme(myTheme);
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      console.log(myTheme);
      showAlert("original " + "enabled successfully", "Success");
    }
  }
  

  return (
    <>
      <BrowserRouter>
      
      <Navbar title="TextUtils" aboutText="About" themeMode={theme} />
      <Alert alert={alert} />
      
      <Routes>
       
       <Route path='/' element={<TextForm heading=" Enter The Text To Analyze Below" alertFunc={showAlert} themeMode={theme} func={toggleMode} />}/>
         

       <Route path='/about' element={
       <About/>}/>

      </Routes>
      
        
      </BrowserRouter>      
    </>

  );
}
// component names should always be capital ;

 