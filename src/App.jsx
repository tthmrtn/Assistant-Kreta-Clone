import Login from './Login.jsx';

import { Route, Routes } from 'react-router-dom';
import Registration from './Registration.jsx';
import Main from './main.jsx';
import Navigation from './Navigation.jsx';
import { useState } from 'react';

import './css/main.css';
import Profile from './Profile.jsx';
import Grades from './Grades.jsx';

function App() {
  
  const [loggedIn, logIn] = useState(false);

  
  if (getCookie("user") != '' && ( location.pathname == '/registration' || location.pathname == '/login')){
    location.href = '/';
  } else if (!getCookie("user") != '' && location.pathname != '/registration' && location.pathname != '/login'){
    location.href = '/login';
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  

  function handleLogin(){
    document.cookie = "user=John Doe";
    logIn(true);
  }

  function handleRegister(){
    location.href="/login";
  }

  return (
    <>
      {getCookie("user") != '' && <Navigation />}
      <h1 className="logo-title">Assistant</h1>
      <Routes>
        <Route path='/' element={<Main onSubmit={() => {
                    document.cookie = "user=";
                    logIn(!loggedIn);
                    console.log("FASZ");
                }}/>}/>
        <Route path='/login' element={<Login onSubmit={handleLogin}/>}/>
        <Route path='/registration' element={<Registration onSubmit={handleRegister}/>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/grades' element={<Grades />}/>
      </Routes>
      
    </>
  )
}

export default App
