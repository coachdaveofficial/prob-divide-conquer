function findFloor(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middleIdx = Math.floor((left + right) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === num) {
            return middleVal;
        } else if (middleVal < num) {
            left = middleIdx + 1;
        } else {
            right = middleIdx - 1;
        }
    }


    if (right >= 0 && arr[right] < num) {
        return arr[right];
    }

    return -1;
}

module.exports = findFloor