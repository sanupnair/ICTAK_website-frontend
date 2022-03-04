import React from 'react';
import './home.css';
import Sidebar from '..//components/sidebar/Sidebar';
import Content from '..//components/content/Content';
import Aboutus from '..//components/aboutus/Aboutus';
import Header from '../components/header/Header';



function Home() {
  return (
   <><Header/>
   <div className='home container-lg'>
    <Content/>
  </div>
    <Aboutus/>
    </>    

  )
}

export default Home;