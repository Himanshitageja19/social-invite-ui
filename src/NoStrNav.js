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
      <Nav className='text-center py-4 px-2' style={{display: 'flex', justifyContent: 'space-between'}} pills>
 
  <NavItem>
    <NavLink className="active" tag={RRLink} to="/" >
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
      tag={RRLink}
    >
       HashTags 
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/Images"
      tag={RRLink}
    >
      Images
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
    to="/Video"
    tag={RRLink}
    >
     Video
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      tag={RRLink}
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