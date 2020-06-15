import React from 'react';
import './index.css';


function Card({stepNumber, title, body}) {

    return (
            <div className='Card-container'>
                <h1 className='Card-number'>
                    {stepNumber}
            </h1>
                <h4 className='Card-title'>
                    {title}
            </h4>
                <p className='Card-content'>
                    {body}
            </p>
            </div>
    )
}

export default Card;