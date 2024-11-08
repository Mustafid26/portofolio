import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </div>
  );
};

export default App;
