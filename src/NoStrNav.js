import React from 'react';
import {
  Nav,
  NavItem,
  
} from 'reactstrap';
import {  Link, Outlet, NavLink } from "react-router-dom";

function NoStrNav(props) {
  return (
    <div >
      <Nav className='text-center m-8 p-4' justified pills>
 
  <NavItem>
    <NavLink href="#" >
      Posts
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/Links"
      
    >
          Links
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/Hashtags"
      
    >
       HashTags 
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
     
    >
     <Link to="/Images"> Images </Link>
      
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
    >
     <Link to="/Video"> Video </Link>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="/Audio"

    >
      <Link to="/Audio"> Audio </Link>
    </NavLink>
  </NavItem>
</Nav>

    </div>
  );
}

export default NoStrNav;