import React from 'react';
import ReactDOM from 'react-dom';
import OverflowScrolling from '../../dist/index.js';

const element = (
    <>
        <OverflowScrolling className='side-left overflow-scrolling'>
            <ul class='list'>
                {Array.from(Array(100).keys()).map(() => <li>↑</li>)}
            </ul>
        </OverflowScrolling>
        <OverflowScrolling className='side-right overflow-scrolling'>
            <ul class='list'>
                {Array.from(Array(100).keys()).map(() => <li>↑</li>)}
            </ul>
        </OverflowScrolling>
        <OverflowScrolling className='side-top overflow-scrolling'>
            <ul class='list list-inline'>
                {Array.from(Array(100).keys()).map(() => <li>←</li>)}
            </ul>
        </OverflowScrolling>
        <OverflowScrolling className='side-bottom overflow-scrolling'>
            <ul class='list list-inline'>
                {Array.from(Array(100).keys()).map(() => <li>←</li>)}
            </ul>
        </OverflowScrolling>
        <OverflowScrolling className='side-center overflow-scrolling'>
            <ul class='list'>
                {Array.from(Array(100).keys()).map((i) => <li>{i % 2 ? '←' : '↑'}</li>)}
            </ul>
        </OverflowScrolling>
    </>
);

ReactDOM.render(element, document.getElementById('demo'));
