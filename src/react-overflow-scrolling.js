import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const setScrollPadding = (node) => {
    const { scrollTop, offsetHeight, scrollHeight } = node;

    if (scrollTop <= 0) {
        node.scrollTop = 1;
    }

    if (scrollTop + offsetHeight >= scrollHeight) {
        node.scrollTop = scrollHeight - offsetHeight - 1;
    }
};

export default class OverflowScrolling extends React.Component {
    static displayName = 'OverflowScrolling';
    
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);
        this.state = {
            isScrollable: false,
        };
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }

    onTouchStart() {
        const parentNode = ReactDOM.findDOMNode(this);
        const isScrollable = parentNode.scrollHeight > parentNode.offsetHeight;

        if (isScrollable) {
            setScrollPadding(parentNode);
        }

        this.setState({
            isScrollable: !isScrollable,
        });
    }

    onTouchMove(e) {
        if (this.state.isScrollable) {
            e.preventDefault();
        }
    }

    onTouchEnd() {
        this.setState({
            isScrollable: false,
        });
    }

    render() {
        const newProps = {
            className: this.props.className,
            style: this.props.style,
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
            onTouchCancel: this.onTouchEnd,
        }
        return React.createElement('div', newProps, this.props.children);
    }
}
