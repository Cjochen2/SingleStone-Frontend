import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Card from '../Card'

function CardPanel() {
    const [data, setData] = useState([]);
    let objArray;

    useEffect(() => {
        axios.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
            .then((response) => {
                console.log(response);
                // Assigns array to variable
                objArray = response.data;
                // Sorts objects based on stepNumber property
                objArray.sort((a, b) => (a.stepNumber > b.stepNumber) ? 1 : -1);
                console.log(objArray);
                setData(objArray);
            })

    }, [])



    return (
        <div>
            <div className='Panel-title'>
                How It Works
            </div>
            <div className='Panel-cards-container'>
                {data.map((obj, index) => <Card key={index} stepNumber={obj.stepNumber} title={obj.versionContent[0].title} body={obj.versionContent[0].body} />)}
            </div>
        </div>
    )
}

export default CardPanel;