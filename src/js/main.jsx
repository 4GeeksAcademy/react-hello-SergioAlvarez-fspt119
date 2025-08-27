import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import  Home  from "./components/Home";
import  Navbar  from "./components/Navbar";
import  Jumbotron  from "./components/Jumbotron";
import  Card  from "./components/Card";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
)
