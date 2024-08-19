import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const promise = loadStripe('pk_test_51PomBKC8Av98MBvgb8Q2tsLIVhOtKtuGpvF06HbKNGi9q6bNBE6AJG7kaINfeBiKnhNtLMj3aeNjiLzyH4YfrUm100ZhrhXEF3');

function App() {
  const [{}, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      {/* Include ScrollToTop here */}
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onSearch={handleSearch} />
                <Home searchTerm={searchTerm} />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header onSearch={handleSearch} />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header onSearch={handleSearch} />
                <Elements stripe={promise}>
                  <Payment />
                  <Footer />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
