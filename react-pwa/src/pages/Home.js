import Header from '../common/Header';
import {Link} from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { useState } from 'react';





const Home = () => {


 

  return (

    

    <>

    <Header/>

    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-10 col-xl-8'>
          <div className='header mt-md-2'>
            <div className='header-body'>
              <h1 className='header-title'>Sistema de Faltas ESDR</h1>

              <p className='header-subtitle'>Bem vindo - {localStorage.getItem('auth_name')}</p>

            </div>
          </div>
          <div >
            <h4 className='card-header-title'>Escolha o piso</h4>
          </div>
          
          <div className='row'>
          
            <div className='col-12 col-lg-6 col-xl'>
            <div className='card'>
                <div className='card-header'>
                <Link to="/a3">
                  <h4 className='card-header-title'>
                    
                    <FiArrowRight/> A3
                    
                  </h4>
                  </Link>
                </div>
                <div className='card-header'>
                <Link to="/n1">
                  <h4 className='card-header-title'>
                    <FiArrowRight/> Norte 1  
                  </h4>
                  </Link>
                </div>
                <div className='card-header'>
                <Link to="/n2">
                  <h4 className='card-header-title'>
                    
                    <FiArrowRight/> Norte 2
                    
                  </h4>
                  </Link>
                </div>
                <div className='card-header'>
                <Link to="/n3">
                  <h4 className='card-header-title'>
                    
                    <FiArrowRight/> Norte 3
                    
                  </h4>
                  </Link>
                </div>
                <div className='card-header'>
                <Link to="/s1">
                  <h4 className='card-header-title'>
                    
                    <FiArrowRight/> Sul 1
                    
                  </h4>
                  </Link>
                </div>
                <div className='card-header'>
                <Link to="/s2">
                  <h4 className='card-header-title'>
                    
                    <FiArrowRight/> Sul 2
                    
                  </h4>
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
