export function isScrollAllow(node) {
    const { scrollHeight, offsetHeight } = node;
    return scrollHeight > offsetHeight;
}

export function isScrollMoveTopAllow(node) {
    const { scrollTop } = node;
    return scrollTop > 0;
}

export function isScrollMoveBottomAllow(node) {
    const { scrollTop, offsetHeight, scrollHeight } = node;
    return (scrollTop + offsetHeight) < scrollHeight;
}

export function getChildrenScrollNode(event) {
    let findNode = event.target;
    let resultNode = null;

    while (findNode !== event.currentTarget) {
        const cssOverflowY = window.getComputedStyle(findNode)['overflow-y'];
        const validOverflowY = ['auto', 'scroll'].includes(cssOverflowY);

        if (validOverflowY) {
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
