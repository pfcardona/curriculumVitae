import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutAvatarImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #E91E63;
  margin: 0 auto;
  display: block;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
`;

const Abouth2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #C2185B;
`;

const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #C2185B;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;

const AboutLocation = styled.p`
  font-size: 1em;
  font-weight: 400;
  color: #757575;
`;

// extraer los elementos que nosotros pasamos como propiedades
//Se las vamos asignar aqui como elementos de objeto para que podamos desectructuraRlo
//y poderlas utilizar dentro de nuestro componente.
const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
            <figure>
                <img src={avatar} alt={name}/>
            </figure>
            </AboutAvatar>  
        </div>
        <div className="About-name">
        <Abouth2>{name}</Abouth2>
        </div>
        
        <AboutProfession>{profession}</AboutProfession>
        <AboutBio>
            {bio}
        </AboutBio>
         <AboutLocation>
            {address}
        </AboutLocation>
        <div className="About-social">
        <Social social={social} />
        </div>
    </AboutStyle>
);
export default About;