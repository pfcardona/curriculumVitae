import React from 'react';

const Education = props => (
    <div className="Education">
        {/* // function map que nos permite iterar por un arreglo 
        // y retornar por un arrreglo po cada  uno de los elementos  
        //Index es para que react puede identificar
        cada uno de los elementos que estoy utilizando en el render
        y nos los confunda cuando este comparando el DOM */}
        
        {props.data.map((edu, index) => (
            <div className='Education-item' key={`Education-${index}`}>
                <h3><p>hola </p> {edu.degree} @ {edu.institution}             
                    <span>{edu.startDate} - {edu.endDate} </span>  
                </h3>         
                                                        
            </div>
        ))}
    </div>
);

export default Education;