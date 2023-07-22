import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProSignup from "./pages/Prosignup2"
import BidForm from './pages/BidForm';

function App() {
  return (
        <React.Fragment>
        {
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/proSignup2" element={<ProSignup />} />
              <Route path="/bidForm" element={<BidForm />} />
            </Routes>
          </Router>
        }
        </React.Fragment>
  );
}

export default App;
