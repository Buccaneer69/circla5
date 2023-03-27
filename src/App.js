import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

// Components
import Landing from './components/Landing';
import Container from './components/Container';

const screens = [
  { id: 1, title: 'Containers' },
  { id: 2, title: 'Materials' },
  { id: 3, title: 'Byggkarl' },
  { id: 4, title: 'Byggsackar' },
  { id: 5, title: 'Waste' },
];

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/container/:id"
            element={<Container />}
          />
        </Routes>
      </Router>
    );
}

export default App;
