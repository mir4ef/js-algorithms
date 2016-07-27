/**
 * Fibonacci
 */

(function () {
    'use strict';
    
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    fibonacci(10);
    fibonacci(12);
})();