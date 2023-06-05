import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NoStrNav(args) {
  return (
    <div >
      <Nav className='text-center m-8 p-4' justified pills>
  <NavItem>
    <NavLink
      href="#"
    >
      People
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink active href="#">
      Posts
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Zapped
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
    >
      Links
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
    >
      Hashtags
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
    >
      Images
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
    >
      Video
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
    >
      Audio
    </NavLink>
  </NavItem>
</Nav>
    </div>
  );
}

export default NoStrNav;