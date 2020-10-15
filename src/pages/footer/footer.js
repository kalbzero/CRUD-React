import React, {Component} from 'react';
import './footer.css';
import facebook from '../../img/facebook-icon.png';
import instagram from '../../img/instagram-icon.png';
import twitter from '../../img/twitter-icon.png';
import youtube from '../../img/youtube-icon.png';
import whatsapp from '../../img/whatsapp-icon.png';
import telegram from '../../img/telegram-icon.png';

class Footer extends Component {
    render(){
        return (
            <footer className="pt-5">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <p>Redes Socias</p>
                            <div className="row img">
                                <a href="https://www.facebook.com"><img src={facebook}></img></a>
                                <img src={instagram}></img>
                            </div>
                        </div>

                        <div className="col contato">
                            <p> Contato: <a href="tel:51987654321">(51) 98765-4321</a> </p>
                            <p> E-mail: <a href="mailto:contato@empresa.com.br">contato@empresa.com.br</a></p>
                        </div>

                        <div className="col">
                            <p className="endereco">
                                Endereço: <br/>
                                Avenida Farroupilha, 2000 <br/>
                                Moinhos de Vento <br/>
                                Canoas-RS <br/>
                                Brasil
                            </p>
                        </div>

                    </div>
                </div>
                <p className="copyright pb-3">Copyright@2020 - Edward Ramos</p>
            </footer>
        );
    }
}

export default Footer;