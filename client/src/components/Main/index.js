import React from 'react';
import './index.css';

function Main() {

    return (
        <div className='Main-content'>
            <div id='Content-1'>
                {'New Games & Accessories'}
            </div>
            <div id='Content-2'>
                Monthly packages.
                <br />
                Excitement delivered daily.
            </div>
            <div id='Content-3'>
                What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep-every month.
            </div>
            <a href="https://cjochen2.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                <button id='Get-started'>Get Started</button>
            </a>
        </div>
    )
}

export default Main;