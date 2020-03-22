import React from 'react';
import H2Styled from '../styled/H2Element';    
import H3Styled from '../styled/H3Element';   
import ParamElement from '../styled/ParamElement';     

const Certificate = props => (
    <div className="Certificate">
        <H2Styled name="Certificate" />
        {props.data.map((cert, index) => (
             <div className='item' key={`Certificate-${index}`}>
                 <H3Styled>{cert.name} @ {cert.institution} &nbsp;
                    <span>{cert.date}</span>
                </H3Styled>   
                <ParamElement content={cert.description}/>    
                    
            </div>        
         ))}               
    </div>
);

export default Certificate;