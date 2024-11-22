import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Questionaire from './Questionaire';
import Home from './Home';


const App = () => {
    
    return (
      
        <Router>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionaire" element={<Questionaire />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
    )
};

export default App;
