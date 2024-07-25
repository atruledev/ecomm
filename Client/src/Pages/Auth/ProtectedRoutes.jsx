import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Cart from '../Cart';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';



function ProtectedRoutes({ children }) {
    const navigate = useNavigate();
    const Auth = useSelector((state)=> state.cart.Auth);
    useEffect(()=>{

        if(!Auth){
            console.log("user is not authentiucated", Auth)
            navigate('/login')
          
        }
      
    }, [Auth, navigate])
    if(Auth){
        
        return  children ;
    }
 
  }


export default ProtectedRoutes