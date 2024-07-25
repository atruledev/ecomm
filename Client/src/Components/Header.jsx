import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "./../Pages/Products";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../Store";

function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.cart);
  const Auth = useSelector((state)=> state.cart.Auth);
  const handleLogout = ()=>{
      let valueAuth = !Auth
      dispatch(counterAction.Authentication(valueAuth));
      console.log(valueAuth);  
      navigate('/')  
  }
  return (
    <header class="text-gray-600 body-font border-b-2 border-black">
      <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      
          <Link to="/">
           
            <img src="../src/assets/logon_210x.avif" width={150} />{" "}
          </Link>
       

        <form class="max-w-lg mx-auto">
          <label
           
            class="mb-2 text-sm font-medium text-black sr-only dark:text-black"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-black "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              onChange={props.handlesearch}
              id="default-search"
              class=" px-60 block w-full  p-4 ps-10 text-sm text-black border
              dark:placeholder-gray-400 "
              placeholder="Search Shoes, Bags..."
              required
            />
          </div>
        </form>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            class="mr-5 text-black font-semibold  hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/products"
            class="mr-5   text-black font-semibold hover:text-gray-700"
          >
            Shop
          </Link>
          <a class="mr-5  text-black font-semibold hover:text-gray-700">
            About Us
          </a>
          <a class="mr-5  text-black font-semibold hover:text-gray-700">
            Contact Us
          </a>
          <Link
            to="/wishlist"
            class="mr-5   text-black font-semibold hover:text-gray-700"
          >
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-white-500 hover:bg-black hover:text-white ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </Link>
          <Link
            to="/cart"
            class="   text-black font-semibold hover:text-gray-700"
          >
            <div className="relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="file:h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {value}
              </span>
            </div>
          </Link>
           
            {Auth ? (  <button className="text-black font-semibold hover:text-gray-700 p-5" onClick={handleLogout}>Logout</button> )
              
           :  (   <Link
           to="/login"
           class="   text-black font-semibold hover:text-gray-700 p-5"
         >
          Login
           </Link>
            )}
          
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
