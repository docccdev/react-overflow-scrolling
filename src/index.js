import React from 'react';
import EasySwipe from 'react-easy-swipe';
import {
    isScrollAllow,
    isScrollToTopAllow,
    isScrollToBottomAllow,
    isScrollToLeftAllow,
    isScrollToRightAllow,
    getChildrenScrollNode,
    stopEvent,
} from './utils';

const SWIPE_DIRECTION_HORIZONTAL = 'horizontal';
const SWIPE_DIRECTION_VERTICAL = 'vertical';

export default class OverflowScrolling extends React.Component {
    static displayName = 'OverflowScrolling';

    constructor(props) {
        super(props);

        this.currentNode = null;
        this.childrenNode = null;
        this.swipeDirection = null;
    }

    disableScroll = ({ deltaX, deltaY }, event) => {
        const isVertical = this.swipeDirection === SWIPE_DIRECTION_VERTICAL;
        const isHorizontal = this.swipeDirection === SWIPE_DIRECTION_HORIZONTAL;
        const stopScrollToTop = deltaY <= 0 && !isScrollToTopAllow(this.currentNode);
        const stopScrollToBottom = deltaY >= 0 && !isScrollToBottomAllow(this.currentNode);
        const stopScrollToLeft = deltaX <= 0 && !isScrollToLeftAllow(this.currentNode);
        const stopScrollToRight = deltaX >= 0 && !isScrollToRightAllow(this.currentNode);

        if (this.childrenNode && isScrollAllow(this.childrenNode)) {
            const stopChildScrollToTop = deltaY <= 0 && !isScrollToTopAllow(this.childrenNode);
            const stopChildScrollToBottom = deltaY >= 0 && !isScrollToBottomAllow(this.childrenNode);
            const stopChildScrollToLeft = deltaX <= 0 && !isScrollToLeftAllow(this.childrenNode);
            const stopChildScrollToRight = deltaX >= 0 && !isScrollToRightAllow(this.childrenNode);

            if (isVertical && ((stopScrollToTop && stopChildScrollToTop) || (stopScrollToBottom && stopChildScrollToBottom))) {
                stopEvent(event);
            }

            if (isHorizontal && ((stopScrollToLeft && stopChildScrollToLeft) || (stopScrollToRight && stopChildScrollToRight))) {
                stopEvent(event);
            }
        } else if (isScrollAllow(this.currentNode)) {
            if (isVertical && (stopScrollToTop || stopScrollToBottom)) {
                stopEvent(event);
            }

            if (isHorizontal && (stopScrollToLeft || stopScrollToRight)) {
                stopEvent(event);
            }
        } else {
            stopEvent(event);
        }
    }

    setSwipeDirection = ({ deltaX, deltaY }) => {
        if (!this.swipeDirection) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                this.swipeDirection = SWIPE_DIRECTION_HORIZONTAL;
            } else {
                this.swipeDirection = SWIPE_DIRECTION_VERTICAL;
            }
        }
    }

    onTouchStart = (event) => {
        this.currentNode = event.currentTarget;
        this.childrenNode = getChildrenScrollNode(event);
    }

    onTouchEnd = () => {
        this.currentNode = null;
        this.childrenNode = null;
        this.swipeDirection = null;
    }

    onTouchMove = ({ x, y }, event) => {
        const deltaX = x * -1;
        const deltaY = y * -1;

        this.setSwipeDirection({ deltaX, deltaY });
        this.disableScroll({ deltaX, deltaY }, event);
    }

    onWheel = (event) => {
        const { deltaX, deltaY } = event;

        this.currentNode = event.currentTarget;
        this.childrenNode = getChildrenScrollNode(event);
        this.swipeDirection = null;

        this.setSwipeDirection({ deltaX, deltaY });
        this.disableScroll({ deltaX, deltaY }, event);
    }

    render() {
        return React.createElement(
            EasySwipe,
            {
                ...this.props,
                onSwipeStart: this.onTouchStart,
                onSwipeMove: this.onTouchMove,
                onSwipeEnd: this.onTouchEnd,
                onWheel: this.onWheel,
            },
        );
    }
}
