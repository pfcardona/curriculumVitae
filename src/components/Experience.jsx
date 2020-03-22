import React from 'react';
import H2Styled from '../styled/H2Element';    
import H3Styled from '../styled/H3Element';   
import ParamElement from '../styled/ParamElement'; 
// extraer los elementos que nosotros pasamos como prop
// Desestructuramos los elementos del objeto
const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experience"/>  
        {props.data.map((exp, index) => (       
        <div className='item' key={`Experience-${index}`}>
             <H3Styled>{exp.jobTitle} @ {exp.company} &nbsp; 
                <span> 
                         {exp.startDate} - {exp.endDate}   
                </span> 
             </H3Styled>    
             <ParamElement content={exp.jobDescription} />               
        </div>
        ))}               
    </div>
);
export default Experience;