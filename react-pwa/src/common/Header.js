import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../axiosInstance';


const Header = () => {
var Logout = '';
const history = useHistory();

const logoutSubmit = async (e) => {
  e.preventDefault();



  await axiosInstance.post('/api/logout').then(res =>{
    if(res.data.status === 200){
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      localStorage.removeItem('role');
      console.log(res.data)
      history.go('/login')

    }
  })
}

if(!localStorage.getItem('auth_token')){
  Logout = (
<Button onClick={logoutSubmit}>
<i className="fe fe-user">Entrar</i>          
</Button>

  )
}else{

  Logout = (
    <Button onClick={logoutSubmit}>
    <i className="card-header-title">Sair</i>          
    </Button>
    
      )


}




    return (
        <div className="navbar navbar-expand-lg navbar-light" id="topnav">
        <div className="container">

        <Link to='/'><button className="navbar-toggler mr-auto" type="button"  data-target="#navbar" aria-controls="navbar" aria-expanded="true" aria-label="Toggle navigation">
            <span className="fe fe-arrow-left">
            
            
            </span>
          </button></Link>


          <div className="navbar-user">
      

            <div className="dropdown">
        
              <div className="avatar-img rounded-circle">
                {Logout}

              </div>

            </div>

          </div>


          <div className="collapse navbar-collapse mr-auto order-lg-first" id="navbar">




            <ul className="navbar-nav mr-auto">

              <h2 className="text-muted nav-item mb-0">
                <div>
                  <Link to='/'>
                  Inicio
                  </Link>
                </div>
              </h2>
            </ul>

          </div>

        </div>
      </div>
    )
}


export default Header;