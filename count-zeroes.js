function countZeroes(numArr) {
    let zeroArr = [];
    let leftIdx = 0;
    let rightIdx = numArr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = numArr[middleIdx];

        if (middleVal === 0) {
            zeroArr = [...zeroArr, ...numArr.slice(middleIdx, rightIdx + 1)];
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    return zeroArr.length;
}



module.exports = countZeroes