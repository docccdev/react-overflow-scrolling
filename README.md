react-overflow-scrolling
=====================
Stop propagation vertical body scroll

[![npm](https://img.shields.io/npm/v/react-overflow-scrolling.svg)](https://www.npmjs.com/package/react-overflow-scrolling)

# Dependencies

```bash
$ npm i react-easy-swipe
```

# Installation

```bash
$ npm install react-overflow-scrolling
```

# Usage

CSS

```css
.overflow-scrolling {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
```

JSX

```js
import OverflowScrolling from 'react-overflow-scrolling';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <OverflowScrolling className='overflow-scrolling'>
                    ...
                </OverflowScrolling>
            </div>
        );
    }
}

export default MyComponent;
```
