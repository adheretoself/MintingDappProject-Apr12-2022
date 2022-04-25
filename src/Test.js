import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './Test.css';
import './Normalize.css';

function Test() {

    function accion(event) {
        const Pivot = document.querySelector('.pivot');
        Pivot.remove();
        //Pivot.setAttribute("hidden", "");
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <div className='container-full'>
                <header>
                    <div className='header-grid'>
                        <img className='header-grid-logo' src={logo} alt="logo" />
                        <nav className='header-grid-navbar'>
                            <ul>
                                <li><a href="#merch">Merch</a></li>
                                <li><a href="#roadmap">Roadmap</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#whitepaper">Whitepaper</a></li>
                            </ul>
                        </nav>
                        <nav className='header-grid-navbar'>
                            <ul>
                                <li><a href="#merch">Twitter</a></li>
                                <li><a href="#roadmap">Instagram</a></li>
                                <li><a href="#team">Discord</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className='main-grid'>
                        <div className='main-grid-left'>
                            <div className='main-grid-left-rocket'>
                                <img alt="logo" />
                            </div>
                            <div className='main-grid-left-wall-1'>
                                <img alt="logo" />
                            </div>
                            <div className='main-grid-left-wall-2'>
                                <img alt="logo" />
                            </div>
                            <div className='main-grid-left-button'>
                                <img alt="logo" />
                            </div>
                        </div>

                        <div className='main-grid-right'>
                        <div className='main-grid-right-pivot'>
                                <img className="pivot" alt="logo" onClick={accion} />
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    FOOTER
                </footer>
        </div>
    );
}

export default Test;
