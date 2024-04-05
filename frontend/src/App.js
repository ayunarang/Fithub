import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../src/Components/Home/Home'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
