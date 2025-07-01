import React from 'react';

import { TbCodePlus, TbArrowsMaximize, TbArrowsDiagonalMinimize2 } from 'react-icons/tb';
import { BiSearchAlt } from 'react-icons/bi';
import { GiHamburger } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import './AboutMeScreen.css';

export default function AboutMeScreen() {

    return (
    <section id="main-sobre--container">
        <div>
            <h1 className="main-title">&lsaquo;Sobre Mim&rsaquo;</h1>
            <div>
                <div>
                    <div className="main-sobre--shellHead">
                        <i><TbCodePlus /></i>
                        <span><h3>root@mrRobot:/home/higashi/aboutMe</h3></span>
                        <div>
                            <i><BiSearchAlt /></i>
                            <i><GiHamburger /></i>
                        </div>
                        <div className="main-sobre--shellHeadWindowCommomIcons">
                            <i><TbArrowsDiagonalMinimize2 /></i>
                            <i><TbArrowsMaximize /></i>
                            <i><AiOutlineClose /></i>
                        </div>

                    </div>
                    <p>
                        <span className="main-sobre--shellUser">root@mrRobot</span>:<span className="main-sobre--shellDir">/home/higashi/aboutMe</span># \ <br/>&rsaquo;
                        <br/><br/>
                        <span className="main-sobre--shellDir">ADENDO</span><br/><br/>
                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>

                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>

                        <span className="main-sobre--shellDir">CONVICÇÕES</span><br/><br/>
                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>
                        
                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>
                        
                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>
                        
                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>

                        <span className="main-sobre--shellDir">HOBBIES</span><br/><br/>

                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>
                        
                        Neste espacço trago um pouco sobre meus conhecimentos técnicos e um pouco sobre mim.<br/><br/>
                
                    </p>
                </div>
            </div>             
        </div>
    </section>
    )
};
