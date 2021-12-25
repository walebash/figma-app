import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Transport from './Transport';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Modal from './Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">

      <Navbar2 />
      <Navbar />
      <Transport />

    </div>
  );
}

export default App;
