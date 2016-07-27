/**
 * From a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
 *
 * Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array.
 * The array is unsorted. Find the missing number.
 */

(function () {
    'use strict';

    const arr1 = [5, 2, 6, 1, 3];
    const arr2 = [5, 2, 6, 1, 4, 8, 10, 3, 7];

    function missingNumber(nums) {
        if (nums.length) {
            const n = nums.length + 1;
            const expectedSum = n * (n + 1) / 2;
            const sum = nums.reduce((a, b) => a + b);

            return expectedSum - sum;
        }
    }

    missingNumber(arr1); // 4
    missingNumber(arr2); // 9
})();