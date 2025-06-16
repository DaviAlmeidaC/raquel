import React from 'react';                      // importante em versões <17
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './Splash';                  // ./Splash.js
import Home   from './Home';                    // ./Home.js
import Vagas  from './Vagas';                   // ./Vagas.js

function App() {
  return (
    
      <Routes>
        <Route path="/"      element={<Splash />} />
        <Route path="/home"  element={<Home />}   />
        <Route path="/vagas" element={<Vagas />}  />
      </Routes>
   
  );
}



export default App;
