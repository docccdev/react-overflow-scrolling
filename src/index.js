import React from 'react';
import PropTypes from 'prop-types';
import EasySwipe from 'react-easy-swipe';
import {
    isScrollAllow,
    isScrollMoveTopAllow,
    isScrollMoveBottomAllow,
    getChildrenScrollNode,
    stopEvent,
} from './utils';

export default class OverflowScrolling extends React.Component {
    static displayName = 'OverflowScrolling';

    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);

        this.currentNode = null;
        this.childrenNode = null;
    }

    disableScroll = ({ deltaY }, event) => {
        const scrollAllow = isScrollAllow(this.currentNode);
        const moveTopAllow = deltaY < 0 && !isScrollMoveTopAllow(this.currentNode);
        const moveBottomAllow = deltaY > 0 && !isScrollMoveBottomAllow(this.currentNode);

        if (this.childrenNode && isScrollAllow(this.childrenNode)) {
            const childMoveTopAllow = deltaY < 0 && !isScrollMoveTopAllow(this.childrenNode);
            const childMoveBottomAllow = deltaY > 0 && !isScrollMoveBottomAllow(this.childrenNode);

            if ((moveTopAllow && childMoveTopAllow) || (moveBottomAllow && childMoveBottomAllow)) {
                stopEvent(event);
            }
        } else if (scrollAllow) {
            if (moveTopAllow || moveBottomAllow) {
                stopEvent(event);
            }
        } else {
            stopEvent(event);
        }
    }

    onTouchStart = (event) => {
        this.currentNode = event.currentTarget;
        this.childrenNode = getChildrenScrollNode(event);
    }

    onTouchEnd = () => {
        this.currentNode = null;
        this.childrenNode = null;
    }

    onTouchMove = ({ y }, event) => {
        this.disableScroll({
            deltaY: y * -1,
        }, event);
    }

    onWheel = (event) => {
        this.currentNode = event.currentTarget;
        this.childrenNode = getChildrenScrollNode(event);

        this.disableScroll({
            deltaY: event.deltaY,
        }, event);
    }

    render() {
        const { children } = this.props;
        const newProps = Object.assign({}, this.props, {
            onSwipeStart: this.onTouchStart,
            onSwipeMove: this.onTouchMove,
            onSwipeEnd: this.onTouchEnd,
            onWheel: this.onWheel,
        });

        return React.createElement(EasySwipe, newProps, children);
    }
}
