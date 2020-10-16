import React, {Component} from 'react';
import "./home.css"

import pikachu from "../../img/pikachu.png";
import bulbasaur from "../../img/bulbasaur.png";
import squirtle from "../../img/squirtle.png";
import charmander from "../../img/charmander.png";

class Home extends Component {
    render(){
        return (
            <div className="home pb-5">
                <p className="titulo">Pokemon</p>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img className="photo" src={pikachu}></img>
                        </div>
                        <div className="col-3">
                            <img className="photo" src={bulbasaur}></img>
                        </div>
                        <div className="col-3">
                            <img className="photo" src={squirtle}></img>
                        </div>
                        <div className="col-3">
                            <img className="photo" src={charmander}></img>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-5 mr-5 text-center borda">
                            Infos 1
                            <p>Texto 1</p>
                            <p>Texto</p>
                            <p>Texto</p>
                            <p>Texto</p>
                            <p>Texto</p>
                        </div>
                        <div className="col-5 ml-5 text-center borda">
                            Infos 2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;