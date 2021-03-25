import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import mainphoto from '../images/mainphoto.png';
import '../scss/main.scss';


function NavBar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
        <div className="menu-2-parts">
        <nav className = 'navbar-1'>
            <ul className= "sign-up-section">

            <li className = 'nav-item'>
                <Link to = '/zaloguj-się' className = 'nav-links-1'>
                    Zaloguj 
                </Link>
            </li>

            <li className = 'nav-item-sign-up-border'>
                <Link to = '/załóż-konto' className = 'nav-links-1'>
                    Załóż konto
                </Link>
            </li>

            </ul>
        </nav>

       
        <nav className = 'navbar-2'>
            
            <div className = 'menu-icon' onClick = {handleClick}>
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item-start-border'>
                <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                    Start
                </Link>
            </li>

            <li className = 'nav-item-2'>
                <Link to = '/o-co-chodzi' className = 'nav-links' onClick = {closeMobileMenu}>
                    O co chodzi? 
                </Link>
            </li>

            <li className = 'nav-item-2'>
                <Link to = '/o-nas' className = 'nav-links' onClick = {closeMobileMenu}>
                    O nas
                </Link>
            </li>

            <li className = 'nav-item-2'>
                <Link to = '/fundacja-i-organizacje' className = 'nav-links' onClick = {closeMobileMenu}>
                    Fundacja i Organizacje
                </Link>
            </li>

            <li className = 'nav-item-2'>
                <Link to = '/kontakt' className = 'nav-links' onClick = {closeMobileMenu}>
                    Kontakt
                </Link>
            </li>
        </ul>
        </nav>
        </div>
    )
}

export default NavBar;