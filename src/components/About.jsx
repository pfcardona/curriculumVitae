import React from 'react';

// extraer los elementos que nosotros pasamos como propiedades
//Se las vamos asignar aqui como elementos de objeto para que podamos desectructuraRlo
//y poderlas utilizar dentro de nuestro componente.
const About = ({ avatar, name, profession, bio, address, social }) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src={avatar} alt={name}/>
                </figure>
            </div>
        </div>
        <div className="About-name">
            <h2>{name}</h2>
        </div>
        <div className="About-profession">
            <p>{profession}</p>
        </div>
        <div className="About-desc">
            <p>{bio}</p>
        </div>
        <div className="About-location">
            <p>{address}</p>
        </div>
        <div className="About-social">
        </div>
    </div>
);
export default About;