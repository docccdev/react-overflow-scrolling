react-overflow-scrolling
=====================
Stop propagation body scroll

[![npm](https://img.shields.io/npm/v/react-overflow-scrolling.svg)](https://www.npmjs.com/package/react-overflow-scrolling)

> Auto find children nodes with css property (overflow || overflow-x || overflow-y) and allow native scrolling

## Demo

https://docccdev.github.io/react-overflow-scrolling/

## Installation

```bash
$ npm i react-overflow-scrolling --save
```

## Usage

`CSS`

```css
.overflow-scrolling {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
```

`JSX`

```js
import OverflowScrolling from 'react-overflow-scrolling';

export class ExampleOverflowScrolling extends React.Component {
    render() {
        return (
            <OverflowScrolling className='overflow-scrolling'>
                ...
            </OverflowScrolling>
        );
    }
}
```
