/**
 * from https://www.interviewcake.com
 * Given an arrayOfInts, find the highestProduct you can get from three of the integers.
 * The input arrayOfInts will always have at least three integers.
 */

(function () {
    'use strict';

    const arr1 = [-10, -10, 1, 3, 2];
    const arr2 = [10, -10, 1, 3, 2];
    const arr3 = [1, 10, -5, 1, -100];

    function getMaxProduct(nums) {
        const len = nums.length;
        
        if (len < 3) {
            throw new Error('Need at least three numbers');
        }

        let maxProduct = nums[0] * nums[1] * nums[2];

        // brute force is 0(n^3)
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                for (let m = j + 1; m < len; m++) {
                    const currentProduct = nums[i] * nums[j] * nums[m];

                    maxProduct = Math.max(maxProduct, currentProduct);
                }
            }
        }

        // with sorting is 0(n lg n)
        // nums.sort((a, b) => a - b);

        // solve with 0(n)
        // ...

        return maxProduct;
    }

    getMaxProduct(arr1);
    getMaxProduct(arr2);
    getMaxProduct(arr3);

    /*****************************************/
    /*****************************************/
    /*****************************************/

    // their solution:
    function highestProductOf3Cake(nums) {
        const len = nums.length;

        if (len < 3) {
            throw new Error('Need at least three numbers');
        }

        // We're going to start at the 3rd item (at index 2)
        // so pre-populate highests and lowests based on the first 2 items.
        // we could also start these as null and check below if they're set
        // but this is arguably cleaner
        let highest = Math.max(nums[0], nums[1]);
        let lowest = Math.min(nums[0], nums[1]);

        let highestProductOf2 = nums[0] * nums[1];
        let lowestProductOf2 = nums[0] * nums[1];

        // except this one--we pre-populate it for the first /3/ items.
        // this means in our first pass it'll check against itself, which is fine.
        let highestProductOfThree = nums[0] * nums[1] * nums[2];

        // walk through items, starting at index 2
        for (let i = 2; i < len; i++) {
            const current = nums[i];

            // do we have a new highest product of 3?
            // it's either the current highest,
            // or the current times the highest product of two
            // or the current times the lowest product of two
            highestProductOfThree = Math.max(highestProductOfThree, current * highestProductOf2, current * lowestProductOf2);

            // do we have a new highest product of two?
            highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest);

            // do we have a new lowest product of two?
            lowestProductOf2 = Math.min(lowestProductOf2, current * highest, current * lowest);

            // do we have a new highest?
            highest = Math.max(highest, current);

            // do we have a new lowest?
            lowest = Math.min(lowest, current);
        }

        return highestProductOfThree;
    }
})();