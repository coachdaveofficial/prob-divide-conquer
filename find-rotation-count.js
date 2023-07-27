function findRotationCount(arr) {

    let right = arr.length - 1;
    let left = 0;
    let count = 0;

    while (left < right) {
        let middleIdx = Math.floor((left + right) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < arr[left]) {
            count += arr.slice(0, middleIdx).length;
            left = middleIdx + 1;
        } else if (arr[left] < arr[right]) {
            return count;
        } else if (left == 0 && middleVal < arr[right]) {
            return right;
        } else if (middleVal > arr[right] && middleVal < arr[right -1]) {
            return right;
        } else {
            return count;
        }
    }

    
}

module.exports = findRotationCount