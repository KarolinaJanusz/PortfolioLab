import React from 'react';
import '../scss/start.scss';
import Decoration from '../images/Decoration.svg';
import tshirt from '../images/tshirt.png';
import bag from '../images/bag.png';
import search from '../images/search.png';
import returnpng from '../images/returnpng.png';
import People from '../images/People.png';
import Signature from '../images/Signature.svg';
import CarouselData from '../carousel/CarouselData';
import {sites} from '../carousel/CarouselData';
import Page1 from '../carousel/Page1';
import Page2 from '../carousel/Page2';
import Page3 from '../carousel/Page3';



export default function start(){
    return(
        <>
        <section className = "intro">
        <section className = 'home-banner'>
        </section>

        <section className = "intro-text">

           <h2>Zacznij pomagać!</h2>
           <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>

            <img src= {Decoration} className= "decoration-picture"></img>

            <div className = "start-buttons">
                <button>ODDAJ RZECZY</button>
                <button>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>

       </section>
       </section>

       <section className = "yellow-section">
            <div>
                <h1>10</h1>
                <h5>ODDANYCH WORKÓW</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <div>
                <h1>5</h1>
                <h5>WSPARTYCH ORGANIZACJI</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <div>
                <h1>7</h1>
                <h5>ZORGANIZOWANYCH ZBIÓREK</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
       </section>


            <section className = "four-steps">
                <div className = "four-steps-intro">
                    <h2>Wystarczą 4 proste kroki</h2>
                    <img src = {Decoration}></img>
                </div>

                <section className = "four-steps-grey">
                        <div className = "elm-1">
                            <img src = {tshirt} className = "tshirt-icon"></img>
                            <h5>Wybierz rzeczy</h5>
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>

                        <div className = "elm-2">
                            <img src = {bag} className = "bag-icon"></img>
                            <h5>Spakuj je</h5>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>

                        <div className = "elm-3">
                            <img src = {search} className = "search-icon"></img>
                            <h5>Zdecyduj komu chcesz pomóc</h5>
                            <p>wybierz zaufane miejsce</p>
                        </div>

                        <div className = "elm-4">
                            <img src = {returnpng} className = "return-icon"></img>
                            <h5>Zamów kuriera</h5>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                </section>
            </section>

            <div className="oddaj-rzeczy">
            <button >ODDAJ RZECZY</button>
            </div>  
        

        <section className = "about-us">
            <div className = "about-us-text">
                <h2>O nas</h2>
                <img src={Decoration}></img>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean 
                    potato quandong celery. Bunya nuts black-eyed pea prairie 
                    turnip leek lentil turnip greens parsnip.</p>
                <img src = {Signature} className= "about-us-signature"></img>
            </div>

            <div className = "about-us-picture">
              
            </div>
        </section>

        <section>
            <div>
               <Page1 />

               <ul>
            <li onClick = {Page2}>1</li>
            <li>2</li>
            <li>3</li>
            </ul>
            </div>
        </section>

        </>
    )
}