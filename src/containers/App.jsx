import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificate';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetDara';

const App = () => {
//  constante que va a traer la información y luego la va a empujar
 const data = useGetData();
 console.log(data);
  return data.length === 0 ? <h1>Cargando...</h1> : (
    <Main>     
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>
      {/* //Componente de Info que encapsula  4 componentes 
      //vamos a pasarle lo que necesita cada uno de ellos */}
      <Info>
        <Education
          data = {data.education} 
        />
        {/* <Experience  
            data = {data.Experience} 
        /> */}
        {/* <Certificate
          data = {data.Certificate}  
        /> */}
        <Skills />
      </Info>
    </Main>
  );
}

export default App;