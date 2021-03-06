import React, { useState } from 'react';
import { Link ,Outlet } from "react-router-dom";
import ButtonOpen from './Modal';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { answer: null };
    }

    render() {

        return (
            <div>
                <header className="block">
                    <div className="weather">
                        <ButtonOpen />
                    </div>
                    <div className="container headercontainer">
                        <div className="logoblock">
                            <a aria-current="page" className="" href="/">
                                <div>Forwward</div>
                                <div>Design</div>
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/profile">profile</Link>
                            </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/services">services</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="rightitems">
                            <a href="mailto:info@forwwarddesign.com">info@forwwarddesign.com</a><a href="/contact" className="speakWeather">Speak With Us</a>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
};

export default Navbar;

