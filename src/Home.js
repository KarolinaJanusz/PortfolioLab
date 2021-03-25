import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './scss/main.scss';
import Decoration from './images/Decoration.svg';

function Home(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
        <>
       
        <section className = 'home-banner'>
        </section>
       
       
        </>
    )
}

export default Home;
