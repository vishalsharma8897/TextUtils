/// in app.js file we are gonna write all the names of components we are using in app;


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// all the components are here to handle;
export default function App() {
    return (
        <> 
      {/* <Navbar title="TextUtils" aboutText="about"/> */}
       <Navbar title="TextUtils" aboutText="About"/>
       <TextForm heading=" Enter The Text To Analyze: "/>
        </>
    
    );
}
// component names should always be capital ;

