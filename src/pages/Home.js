import React from 'react';
import cafe from '../images/cafe-amor.jpeg';
import cafe2 from '../images/ca.jpg';
import bungo from '../images/bungo.jpeg';
import soyo from '../images/soyo.jpg';
import cabinda from '../images/cabinda.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <main className="intro">
                <h1>Cafés <br></br>Meso Solutions</h1>
                <p>De Angola para o mundo</p>
            </main>
            <section className="sobre">
                <h2>Uma Mistura de</h2>
                <div className="sobre-container">
                    <div className="sobre-item">
                        <img src={cafe} alt="beach" />
                        <h3>Amor</h3>
                    </div>
                    <div className="sobre-item">
                        <img src={cafe2} alt="beach" />
                        <h3>perfeição</h3>
                    </div>
                </div>
                <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro.
                     É servido tradicionalmente quente, mas também pode ser consumido gelado. 
                     O café é um estimulante, por possuir cafeína — geralmente 80 a 140
                      mg para cada 207 ml dependendo do método de preparação.</p>
            </section>

            <section className="produtos">
                <div className="produtos-container">
                    <div className="produtos-item">
                        <h2 className="produtos-uige">Uíge</h2>
                        <p>Uíge - A campanha de colheita de café a nível da província do Uíge foi aberta 
                            nesta sexta-feira, na fazenda Quinvototo, município do Bungo, que beneficiou
                             do governo local de uma doação de instrumentos de trabalho e dois
                             mil pés de cafeeiros, no âmbito do fomento da actividade cafeícola na região.</p>
                    </div>
                    <div className="produtos-item">
                        <h2 className="produtos-zaire">Zaire</h2>
                        <p>Uíge - A campanha de colheita de café a nível da província do Uíge foi aberta 
                            nesta sexta-feira, na fazenda Quinvototo, município do Bungo, que beneficiou
                             do governo local de uma doação de instrumentos de trabalho e dois
                             mil pés de cafeeiros, no âmbito do fomento da actividade cafeícola na região.</p>
                    </div>
                    <div className="produtos-item">
                        <h2 className="produtos-cabinda">Cabinda</h2>
                        <p>Uíge - A campanha de colheita de café a nível da província do Uíge foi aberta 
                            nesta sexta-feira, na fazenda Quinvototo, município do Bungo, que beneficiou
                             do governo local de uma doação de instrumentos de trabalho e dois
                             mil pés de cafeeiros, no âmbito do fomento da actividade cafeícola na região.</p>
                    </div>
                </div>
                <Link to="" className="produtos-btn">Saiba Mais</Link>
            </section>

            <section className="locais">
                <div className="locais-item">
                    <img src={bungo} alt="Bungo" />
                    <div>
                        <h2>Bungo</h2>
                        <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. 
                            É servido tradicionalmente quente, mas também pode ser consumido gelado</p>
                        <Link to="" className="locais-item-link">Ver Mais</Link>
                    </div>
                </div>
                <div className="locais-item">
                    <img src={soyo} alt="Bungo" />
                    <div>
                        <h2>Zaire</h2>
                        <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. 
                            É servido tradicionalmente quente, mas também pode ser consumido gelado</p>
                        <Link to="" className="locais-item-link">Ver Mais</Link>
                    </div>
                </div>
                <div className="locais-item">
                    <img src={cabinda} alt="Bungo" />
                    <div>
                        <h2>Cabinda</h2>
                        <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. 
                            É servido tradicionalmente quente, mas também pode ser consumido gelado</p>
                        <Link to="" className="locais-item-link">Ver Mais</Link>
                    </div>
                </div>
            </section>

            <section className="assine">
                <div className="assine-container">
                    <div className="assine-info">
                        <h2>Assine Nossa Newsletter</h2>
                        <p>Promoções e eventos</p>
                    </div>
                    <form>
                        <label>E-mail</label>
                        <input type="text" placeholder="Digite seu e-mail" />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
