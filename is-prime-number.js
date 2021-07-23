(function () {
    /**
     *
     * @param {number} num
     * @return {boolean}
     */
    function isPrime(num) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw new TypeError('input must be an integer');
        }

        if (num <= 1) {
            return false;
        }

        if (num === 2) {
            return true;
        }

        const numSqrt = Math.sqrt(num);

        for (let i = 3; i <= numSqrt; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    isPrime(521); // true
    isPrime(9801); // false
    isPrime(13037); // true
    isPrime(49); // false
    isPrime(9); // false
    isPrime(2244353); // true
    isPrime(2244354); // false
    isPrime(-521); // false
})();
