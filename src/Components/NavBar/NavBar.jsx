import React from 'react';
import { useState } from 'react';
import burger from './burger-menu.png';
import "./NavBar.css"

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const animationClass = open ? 'animate-menu-open' : 'animate-menu-close';
  

  return (
    <div>
      <div className="container">
        <div className='flex items-center justify-between p-2 '>
          <p className='2xl:ml-40 NavBar text-xl font-semibold pt-2 pl-11'>Fire Calculator</p>
          <div className='hidden sm:flex items-center ml-auto pt-2'>
            <a href="#" className="text-white hover:font-bold mx-3 text-xl font-semibold">Home</a>
            <a href="#" className="text-white hover:font-bold mx-3 text-xl font-semibold">Working</a>
            <a href="#" className="text-white hover:font-bold mx-3 text-xl font-semibold">FIRE</a>
            <a href="#" className="text-white hover:font-bold mx-3 text-xl font-semibold">SIP</a>
            <a href="#" className="text-white hover:font-bold mx-3 text-xl font-semibold">Invest</a>
          </div>
          <img onClick={() => { setOpen(!open) }} className='w-16 h-16 mr-5 pt-2 sm:invisible' src={burger} alt="" />
        </div>
        { open &&<div className={`animate-menu-open Burger_menu_open ml-auto mr-5 flex-col sm:invisible`}>
          <a href="#" className="text-black hover:font-bold my-1 text-xl font-semibold justify-center ">Home</a>
          <a href="#" className="text-black hover:font-bold my-1  text-xl font-semibold">Working</a>
          <a href="#" className="text-black hover:font-bold my-1  text-xl font-semibold">FIRE</a>
          <a href="#" className="text-black hover:font-bold my-1  text-xl font-semibold">SIP</a>
          <a href="#" className="text-black hover:font-bold my-1  text-xl font-semibold">Invest!</a>
        </div>}
      </div>
    </div>
  );
};

export default NavBar;
