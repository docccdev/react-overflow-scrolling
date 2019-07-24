const OVERFLOW_ENABLE_VALUES = ['auto', 'scroll'];

export function isScrollAllow(node) {
    const {
        scrollHeight,
        scrollWidth,
        offsetHeight,
        offsetWidth,
    } = node;

    return (scrollHeight > offsetHeight) || (scrollWidth > offsetWidth);
}

export function isScrollToTopAllow(node) {
    const { scrollTop } = node;

    return scrollTop > 0;
}

export function isScrollToLeftAllow(node) {
    const { scrollLeft } = node;

    return scrollLeft > 0;
}

export function isScrollToBottomAllow(node) {
    const { scrollTop, offsetHeight, scrollHeight } = node;

    return (scrollTop + offsetHeight) < scrollHeight;
}

export function isScrollToRightAllow(node) {
    const { scrollLeft, offsetWidth, scrollWidth } = node;

    return (scrollLeft + offsetWidth) < scrollWidth;
}

export function getChildrenScrollNode(event) {
    let findNode = event.target;
    let resultNode = null;

    while (!!findNode && findNode !== document && findNode !== event.currentTarget) {
        const computedStyle = window.getComputedStyle(findNode);

        const enableOverflowX = OVERFLOW_ENABLE_VALUES.includes(computedStyle['overflow-x']);
        const enableOverflowY = OVERFLOW_ENABLE_VALUES.includes(computedStyle['overflow-y']);

        if (enableOverflowX || enableOverflowY) {
            resultNode = findNode;
            break;
        }

        findNode = findNode.parentNode;
    }

    return resultNode;
}

export function stopEvent(event) {
    if (event.cancelable) {
        event.preventDefault();
        event.stopPropagation();
    }
}
