import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
    text-align: left;
    font-size: 1em;
    background-color: #062c43;
    color: azure;
    margin: 0;
    padding: 1em;
`
const NavLink = styled(Link)`
    color: white;
`

const NavBar = () => {
    return (
        <Nav>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                <NavLink to={'/shopitems'}>Shop Items</NavLink>
            </li>
                <li>
                <NavLink to={'/shopbasket'}>Basket</NavLink>
            </li>
        </ul>
        </Nav>
    )
}
 
export default NavBar;