import './App.css';
import Employee from './Components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './Components/AddEmployee';
//import EditEmployee from './Components/EditEmployee';
import Header from './Components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './Components/NotFound';


function App() {

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path='/dictionary' element={<Dictionary/>} />
          <Route path='/definition' element={<Definition/>} />
          <Route path='/definition/:search' element={<Definition/>} />
          <Route path='/404' element={<NotFound/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;