/**
 * How would you swap two numbers without using a temporary variable?
 */

(function () {
    'use strict';

    function swapNumbers(a, b) {
        if (a && !isNaN(a) && b && !isNaN(b)) {

            // option 1
            // Destructuring
            [a, b] = [b, a];

            // option 2
            // Mathematically
            // b = a - b;
            // a = a - b;
            // b = a + b;

            // option 3
            // Mathematically - Logical conjunction
            // a = a ^ b;
            // b = a ^ b;
            // a = a ^ b;

            return [a, b];
        }
    }

    swapNumbers(5, 3);
    swapNumbers(3, 5);
    swapNumbers(17, 11);
})();