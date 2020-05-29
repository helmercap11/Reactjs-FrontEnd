import React, { Component } from 'react'

//import bra from '../../images/brafe.png'

import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    {/*<Link className="menu-logo" to="/">Meso Solutions<img src={bra} alt="BRAFE" /></Link>*/}
                    <Link className="menu-logo" to="">Meso Solutions</Link>
                    <nav className="menu-nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">Sobre</Link>
                            </li>
                            <li>
                                <Link to="">Produtos</Link>
                            </li>
                            <li>
                                <Link to="">Portfólio</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
