import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Card from '../Card'

function CardPanel() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
            .then((response) => {
                let objArray;
                // Assigns array to variable
                objArray = response.data;
                // Sorts objects based on stepNumber property
                stepSorter(objArray)
                // Sorts versionContent based on effective Dates
                dateSorter(objArray);
                // Updates and sets the State to the now sorted JSON data
                setData(objArray);
            })

    }, [])

    const dateSorter = (dates) => {
        dates.forEach(obj => obj.versionContent.sort((a, b) => (b.effectiveDate >  a.effectiveDate) ? 1 : -1))
    };

    const stepSorter = (steps) => {
        steps.sort((a, b) => (a.stepNumber > b.stepNumber) ? 1 : -1);
    }

    return (
        <div className='Panel-container'>
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