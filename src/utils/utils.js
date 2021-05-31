export function addToArray(arrayTarget, toBeAdded) {
    if (Array.isArray(arrayTarget)) {
        const increasedArray = arrayTarget.push(toBeAdded);
        return increasedArray;
    } else {
        return 'Error: Not an array';
    }
}

export function removeFromArray(arrayTarget, toBeRemoved) {
    if (Array.isArray(arrayTarget)) {
        const reducedArray = arrayTarget.filter(item => item.value !== toBeRemoved.value);
        return reducedArray;
    } else {
        return 'Error: Not an array';
    }
}