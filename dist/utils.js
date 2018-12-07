'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isScrollAllow = isScrollAllow;
exports.isScrollMoveTopAllow = isScrollMoveTopAllow;
exports.isScrollMoveBottomAllow = isScrollMoveBottomAllow;
exports.getChildrenScrollNode = getChildrenScrollNode;
exports.stopEvent = stopEvent;
function isScrollAllow(node) {
    var scrollHeight = node.scrollHeight,
        offsetHeight = node.offsetHeight;

    return scrollHeight > offsetHeight;
}

function isScrollMoveTopAllow(node) {
    var scrollTop = node.scrollTop;

    return scrollTop > 0;
}

function isScrollMoveBottomAllow(node) {
    var scrollTop = node.scrollTop,
        offsetHeight = node.offsetHeight,
        scrollHeight = node.scrollHeight;

    return scrollTop + offsetHeight < scrollHeight;
}

function getChildrenScrollNode(event) {
    var findNode = event.target;
    var resultNode = null;

    while (findNode !== event.currentTarget) {
        var cssOverflowY = window.getComputedStyle(findNode)['overflow-y'];
        var validOverflowY = ['auto', 'scroll'].includes(cssOverflowY);

        if (validOverflowY) {
            resultNode = findNode;
            break;
        }

        findNode = findNode.parentNode;
    }

    return resultNode;
}

function stopEvent(event) {
    if (event.cancelable) {
        event.preventDefault();
        event.stopPropagation();
    }
}