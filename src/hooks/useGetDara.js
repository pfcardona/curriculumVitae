import { useState, useEffect} from 'react';
const api = 'https://raw.githubusercontent.com/pfcardona/curriculumVitae/develop/api/dateApiCurriculum.json';
// inicializamos todas las funciones con la palabra use

const userGetData = () => {
// trabajamos con el estado, añanado una funcion que actualiza nuestro estado = usestate => pasando la funcion a un estado inicial
    const [mydata, setData] = useState([]);


useEffect(() =>{
    fetch(api)
    .then(response =>response.json())
    .then(data => setData(data))
}, []);

return mydata;
}

export default userGetData;