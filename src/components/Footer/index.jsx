import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './index.css';

const Footer = () => {
    return ( 
            <footer>
                <div className="footer-container">
                    <div className="footer-social-links">
                        <a href="https://www.facebook.com/hitalorodrigo.alves" className="social-link-facebook"> <FacebookIcon /> </a>
                        <a href="https://www.instagram.com/hitaloalvees/" className="social-link-instagram"> <InstagramIcon /> </a>
                        <a href="https://www.linkedin.com/in/hitalo-alves/" className="social-link-linkedin"> <LinkedInIcon /> </a>
                    </div>
                    <ul className="footer-links">
                        <li className="footer-link">
                            <a href="/#"> Idioma e legendas</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Áudio descrição</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Central de ajuda</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Cartão pré-pago</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Imprensa</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Relações com investidores</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Carreiras</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Termos de uso</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Privacidade</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Avisos legais</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Prefêrencias de cookies</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Informações coorporativas</a>
                        </li>
                        <li className="footer-link">
                            <a href="/#">Entre em contato</a>
                        </li>
                    </ul>

                    <div className="footer-service">
                        <button className="service-code">Código de serviço</button>
                    </div>

                    <div className="footer-copyright">
                        <span>
                        © 2021... Alvesflix. Inspirado em © Netflix, Inc.    
                        </span>
                        <span>
                            Feito com <FavoriteIcon style={{color:'red'}} /> por Hitalo.
                        </span>
                    </div>
                </div>
            </footer>
     );
}
 
export default Footer;