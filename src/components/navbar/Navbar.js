import React from 'react';
import logo from '..//..//assets/images/logo.png';
import '..//..//css/style.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 class="m-0 text-primary"><img src={logo} style={{width:'50px', height:'50px', marginRight:'10px'}}></img>ICTAK</h2>
    </a>
    <button type="button" class="btn btn-outline-secondary">Login</button>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="/" class="nav-item nav-link">Home</Link>
        <Link to="/about" class="nav-item nav-link">About</Link>
        <Link to="/courses" class="nav-item nav-link">Courses</Link>
                
                
            <div class="nav-item dropdown">
            <Link to="/" class="nav-item nav-link">Offerings</Link>
                <div class="dropdown-menu  m-0">
                <Link to=""class="dropdown-item">Partnership</Link>
                <Link to=""class="dropdown-item">Membership</Link>
                                    
                </div>
            </div>
            <div class="nav-item dropdown">
            <Link to="/" class="nav-item nav-link">Events</Link>
                <div class="dropdown-menu fade-down m-0">
                <Link to=""class="dropdown-item">ICSET</Link>
                <Link to=""class="dropdown-item">Techathlon</Link>
                  
                </div>
            </div>
            <Link to="https://retail.ictkerala.org/" class="nav-item nav-link">Paatshala LMS</Link>
            <Link to="/contact" class="nav-item nav-link">Contact</Link>
           
            
           
        </div>
       
        <Link to="/register" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register Now<i class="fa fa-arrow-right ms-3"></i></Link>   
    </div>
</nav>
  )
}

export default Navbar