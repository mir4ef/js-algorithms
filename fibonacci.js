/**
 * Fibonacci
 */

(function () {
    'use strict';

    // with recursion
    // time complexity O(2^n)
    // space complexity O(n)
    function fibonacci(num) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw new TypeError('input must be an integer');
        }

        if (num <= 1) {
            return 1;
        }

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    fibonacci(10); // 89
    fibonacci(12); // 233
    // fibonacci(50); // 20,365,011,074

    // with memorization
    // time complexity O(2n)
    // space complexity O(n)
    function fibonacci2(num, memo) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw new TypeError('input must be an integer');
        }

        memo = memo || {};

        if (memo[num]) {
            return memo[num];
        }

        if (num <= 1) {
            return 1;
        }

        return memo[num] = fibonacci2(num - 1, memo) + fibonacci2(num - 2, memo);
    }

    fibonacci2(10); // 89
    fibonacci2(12); // 233
    fibonacci2(50); // 20,365,011,074

    // with loop
    // time complexity O(n)
    // space complexity constant
    function fibonacci3(num) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw new TypeError('input must be an integer');
        }

        let a = 1;
        let b = 0;
        let temp;

        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }

        return b;
    }

    fibonacci3(10); // 89
    fibonacci3(12); // 233
    fibonacci3(50); // 20,365,011,074
})();
