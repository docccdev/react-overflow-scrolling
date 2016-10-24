react-overflow-scrolling
=====================

# Installation

`npm install react-overflow-scrolling`

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
