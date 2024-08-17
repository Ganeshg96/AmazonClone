import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    //will only run once when the app component loads.

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        // user just logged in/ the user was logged in

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })  
  },[])

  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/" 
            element={
              <>
                <Header />
                <Home />
              </> 
            } 
          />
          <Route 
            path="/login" 
            element={
              <>
                <Login />
              </>
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
