const elementOrParentHasClass = (element, className) => {
    if (element.classList.contains(className)) {
        return true;
    } else if (element.parentElement) {
        return elementOrParentHasClass(element.parentElement, className);
    }
    return false;
}

export default elementOrParentHasClass;
