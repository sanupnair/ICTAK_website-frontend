import React from 'react';
import logo from '..//..//assets/images/logo.png'


function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 class="m-0 text-primary"><img src={logo} style={{width:'50px', height:'50px', marginRight:'10px'}}></img>ICTAK</h2>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link ">Home</a>
            <a href="/about" class="nav-item nav-link">About</a>
        
                <a href="/courses" class="nav-item nav-link " >Courses</a>
                
                
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Offerings</a>
                <div class="dropdown-menu  m-0">
                    <a href="" class="dropdown-item">Partnership</a>
                    <a href="" class="dropdown-item">Membership</a>
                  
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</a>
                <div class="dropdown-menu fade-down m-0">
                    <a href="" class="dropdown-item">ICSET</a>
                    <a href="" class="dropdown-item">Techathlon</a>
                  
                </div>
            </div>
            <a href="https://retail.ictkerala.org/" class="nav-item nav-link">Paatshala LMS</a>
            <a href="/contact" class="nav-item nav-link">Contact</a>
        </div>
        <a href="/register" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register Now<i class="fa fa-arrow-right ms-3"></i></a>
    </div>
</nav>
  )
}

export default Navbar