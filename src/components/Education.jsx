import React from 'react';
import H2Styled from '../styled/H2Element';    
import H3Styled from '../styled/H3Element';   
import ParamElement from '../styled/ParamElement';     
const Education = props => (
    <div className="Education">
        <H2Styled name="Educación" />
        {/* // function map que nos permite iterar por un arreglo 
        // y retornar por un arrreglo po cada  uno de los elementos  
        //Index es para que react puede identificar
        cada uno de los elementos que estoy utilizando en el render
        y nos los confunda cuando este comparando el DOM */}
        
        {props.data.map((edu, index) => (
            <div className='Education-item' key={`Education-${index}`}>
                <H3Styled> {edu.degree} @ {edu.institution} &nbsp;            
                    <span>
                        {edu.startDate} - {edu.endDate} 
                    </span>  
                </H3Styled>         
               <ParamElement content={edu.description} />                                         
            </div>
        ))}
    </div>
);

export default Education;