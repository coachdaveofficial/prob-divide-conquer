function sortedFrequency(numArr, val) {
    let firstIdx = findFirst(numArr, val);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(numArr, val);
    return lastIdx - firstIdx + 1;
}

function findFirst(numArr, val, left = 0, right = numArr.length - 1) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numArr[mid] === val && (mid === 0 || numArr[mid - 1] !== val)) {
            return mid;
        } else if (numArr[mid] < val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function findLast(numArr, val, left = 0, right = numArr.length - 1) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numArr[mid] === val && (mid === numArr.length - 1 || numArr[mid + 1] !== val)) {
            return mid;
        } else if (numArr[mid] > val) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency