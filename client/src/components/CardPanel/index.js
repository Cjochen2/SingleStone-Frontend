import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Card from '../Card'

function CardPanel() {

    useEffect(() =>{
        axios.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
            .then((response) =>{
                console.log(response)
            })
    });

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