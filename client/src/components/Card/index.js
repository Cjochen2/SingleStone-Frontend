import React from 'react';
import './index.css';


function Card({stepNumber, title, body}) {

    return (
            <div className='Card-container'>
                <h1 className='Card-number'>
                    0{stepNumber}
            </h1>
                <h3 className='Card-title'>
                    {title}
            </h3>
                <p className='Card-content'>
                    {body}
            </p>
            </div>
    )
}

export default Card;