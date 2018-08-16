import React from 'react';
import ReactDOM from 'react-dom';
import OverflowScrolling from '../../dist/react-overflow-scrolling.js';

const element = (
    <OverflowScrolling className='side overflow-scrolling'>
        {Array.from(Array(100).keys()).map(() => <li>Lorem Ipsum</li>)}
    </OverflowScrolling>
);

ReactDOM.render(element, document.getElementById('demo'));
