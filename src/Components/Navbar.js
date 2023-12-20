import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export const Navbar = ({children}) => {
    return (<>
        <ul className='navUl'>
            <li className='navLI'>
                <Link className='navLink' to={"/"}>Home</Link>
            </li>
            <li className='navLI'>
                <Link className='navLink' to={"/Cart"}>Cart</Link>
            </li>
            <li className='navLI'>
                <Link className='navLink' to={"/Search"}>Search</Link>
            </li>
        </ul>
        <div>{children}</div>
        </>
    )
}
