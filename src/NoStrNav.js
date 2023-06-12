import React from 'react';
import {
  Nav,
  NavItem,
  NavLink as RRLink
  
} from 'reactstrap';
import {  Link, NavLink } from "react-router-dom";

function NoStrNav(props) {
  return (
    <div >
      <Nav className='text-center m-8 p-4' justified pills>
 
  <NavItem>
    <NavLink tag={RRLink} to="/" >
      Posts
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/Links"
      tag={RRLink}
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
      to="/Images"
     
    >
      Images
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
    to="/Video"
    >
     Video
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="/Audio"
      to="/Audio"
    >
      Audio
    </NavLink>
  </NavItem>
</Nav>
    </div>
  );
}

export default NoStrNav;