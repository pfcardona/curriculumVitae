import React from 'react';
import Main from '../components/Main';
import { createGlobalStyle } from "styled-components";
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetDara';
import Loader from '../components/Loader';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
//  constante que va a traer la información y luego la va a empujar
  const data = useGetData();
  return data.length === 0 ? <><GlobalStyle /><Loader />.</> : (
    <Main>
        <GlobalStyle/>     
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          email={data.email}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      {/* //Componente de Info que encapsula  4 componentes 
      //vamos a pasarle lo que necesita cada uno de ellos */}
      <Info>
        
        <Experience  
            data = {data.experience} 
        />
        <Education
          data = {data.education} 
        />
        <Certificate
          data = {data.certificate}  
        />
        <Skills 
          data = {data.skills}  />
      </Info>
    </Main>
  );
}

export default App;