import React from 'react';
import myIllustration from '../../assets/img/web01.png';
import '../../assets/css/myStyles.css';
import '../../assets/css/estilos.css';


export default function MiniCard({title , text}) {
  return (
    <div className="card" style={{width: "15rem"}}>
      <div className="container">
        <div className="row">
          <div className="col" style={{minWidth:"40px"}}>
            <img id="myIllustration" src={myIllustration} alt=""></img>
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
              <a href="/" className="card-link link-primary">Conoce más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


