/**
 * from https://www.interviewcake.com
 * You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
 * Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
 * For example, given:
 *
 * [1, 7, 3, 4]
 * your function would return:
 * [84, 12, 28, 21]
 * by calculating:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * Do not use division in your solution.
 */

(function () {
    'use strict';

    const arr1 = [1 ,7, 3, 4];
    const arr2 = [1, 2, 6, 5, 9];

    function getProductsOfAllIntsExceptAtIndex(nums) {
        const len = nums.length;

        if (len < 2) {
            return nums;
        }

        const numbers = nums.slice();

        for (let i = 0; i < len; i++) {
            numbers.splice(i, 1);

            const product = numbers.reduce((a, b) => a * b);

            numbers.splice(i, 0, nums[i]);
            nums.splice(i, 1, product);
        }

        return nums;
    }

    getProductsOfAllIntsExceptAtIndex(arr1); // [84, 12, 28, 21]
    getProductsOfAllIntsExceptAtIndex(arr2); // [540, 270, 90, 108, 60]

    /*****************************************/
    /*****************************************/
    /*****************************************/

    // their solution:
    function getProductsOfAllIntsExceptAtIndexCake(intArray) {

        var productsOfAllIntsExceptAtIndex = [];

        // for each integer, we find the product of all the integers
        // before it, storing the total product so far each time
        var productSoFar = 1;
        for (var i = 0; i < intArray.length; i++) {
            productsOfAllIntsExceptAtIndex[i] = productSoFar;
            productSoFar *= intArray[i];
        }

        // for each integer, we find the product of all the integers
        // after it. since each index in products already has the
        // product of all the integers before it, now we're storing
        // the total product of all other integers
        productSoFar = 1;
        for (var j = intArray.length - 1; j >= 0; j--) {
            productsOfAllIntsExceptAtIndex[j] *= productSoFar;
            productSoFar *= intArray[j];
        }

        return productsOfAllIntsExceptAtIndex;
    }
})();