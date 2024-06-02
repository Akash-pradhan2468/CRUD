
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import User from './pages/User'
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser'


function App() {
  

  return (
    <>
    
    <Router>
        <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/create' element={<CreateUser/>}></Route>
            <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </Router>


    </>
  )
}

export default App
