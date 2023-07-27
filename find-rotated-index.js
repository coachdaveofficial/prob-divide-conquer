function findRotatedIndex(numArr, val) {
    
    let left = 0;
    let right = numArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numArr[mid] > val && numArr[0] <= val) {
            right = mid - 1;
        } else if (numArr[mid] < val) {
            left = mid + 1;
        } else if (numArr[mid] > val && numArr[numArr.length -1] > val) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1
}

module.exports = findRotatedIndex