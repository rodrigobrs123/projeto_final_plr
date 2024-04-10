import React from 'react';
import {Nav, NavLink, NavMenu} from "./NavBarStyle";




export const NavBar = () => {

    return (

      
        <Nav>
           <NavMenu>
             <NavLink to="/" activeStyle>
                    HOME
                </NavLink>
            </NavMenu>
        </Nav>


    );
}

export default NavBar;


