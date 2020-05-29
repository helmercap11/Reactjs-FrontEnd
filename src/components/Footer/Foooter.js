import React from 'react'
import braf from '../../images/brafe.png';

export default function Foooter() {
    return (
        <footer className="footer">
            <div className="footer-contanier">
                <p>Este é um projecto de estudo <br></br> Luanda-Angola</p>
                <img src={braf} alt="teste" />
            </div>
        </footer>
    );
}
