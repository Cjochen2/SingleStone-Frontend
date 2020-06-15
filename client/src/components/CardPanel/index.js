import React from 'react';
import './index.css';
import Card from '../Card'

function CardPanel() {

    return (
        <div>
            <div className='Panel-title'>
                How It Works
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default CardPanel;