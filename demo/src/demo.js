import React from 'react';
import ReactDOM from 'react-dom';
import OverflowScrolling from '../../dist/react-overflow-scrolling.js';

const element = (
    <OverflowScrolling className='side overflow-scrolling'>
        <ul>
            {Array.from(Array(100).keys()).map(() => <li>Lorem Ipsum</li>)}
        </ul>
    </OverflowScrolling>
);

ReactDOM.render(element, document.getElementById('demo'));
