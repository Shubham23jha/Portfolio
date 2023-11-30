import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleButtonClasses } from '@mui/material';

function Navbar() {
 
    function toggleClasses(e) {
      const items = document.querySelectorAll('.hambur');
    
      items.forEach((item) => {
        if (item.classList.contains('hambur-clicked')) {
          item.classList.remove('hambur-clicked'); // Remove the class "hambur-clicked" if it is applied
        } else {
          item.classList.add('hambur-clicked'); // Add the class "hambur-clicked" if it is not applied
        }
      });
    }
    
  return (
    <header className='sticky z-50 top-0'>
      <nav>
        <ul className='flex nav-text text-xl font-bold lg:text-sm justify-end gap-12 justify-items-center md:block md:fixed md:right-0 md:top-0'>
        <li className='invisible md:visible md:pt-2 md:pr-2' onClick={toggleClasses}><MenuIcon/></li>
          <li className=" hover:text-black hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5 hambur">
            <NavLink
              to="/" className={({isActive}) =>` ${isActive ? "text-black" : "nav-text"}`}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-black hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5 hambur">
            <NavLink
              to="/about" className={({isActive}) =>` ${isActive ? "text-black" : "nav-text"}`}>
              About
            </NavLink>
          </li>
          <li className="hover:text-black hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5 hambur">
            <NavLink
              to="/project" className={({isActive}) =>` ${isActive ? "text-black" : "nav-text"}`}>
              Project
            </NavLink>
          </li>
          <li className="hover:text-black hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5 hambur">
            <NavLink
              to="/contact" className={({isActive}) =>` ${isActive ? "text-black" : "nav-text"}`}>
              Contact
            </NavLink>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
