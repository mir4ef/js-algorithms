/**
 * from https://www.interviewcake.com
 * Write a class TempTracker with these methods:
 *
 * insert()—records a new temperature
 * getMax()—returns the highest temp we've seen so far
 * getMin()—returns the lowest temp we've seen so far
 * getMean()—returns the mean of all temps we've seen so far
 * getMode()—returns the mode of all temps we've seen so far
 *
 * Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.
 *
 * Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..110.
 *
 * If there is more than one mode, return any of the modes.
 */

(function () {
    'use strict';

    function TempTracker() {
        const temperature = {};
        const values = [];

        // keeps track of how many times a temperature occurred
        const counter = {};
        const mode = {
            value: '',
            times: 0
        };

        let sum = 0;
        let maxTemp = -Infinity;
        let minTemp = Infinity;
        let mean = 0;

        function insert(val) {
            values.push(val);

            const len = values.length;

            sum = sum + val;
            mean = sum/len;
            maxTemp = Math.max(maxTemp, val);
            minTemp = Math.min(minTemp, val);

            if (!counter[val]) {
                counter[val] = 1;
            } else {
                counter[val]++;
            }

            if (counter[val] > mode.times) {
                mode.value = val;
                mode.times = counter[val];
            }
        }

        function getMax() {
            return maxTemp;
        }

        function getMin() {
            return minTemp;
        }

        function getMean() {
            return mean.toFixed(2);
        }

        function getMode() {
            return mode;
        }

        temperature.insert = insert;
        temperature.getMax = getMax;
        temperature.getMin = getMin;
        temperature.getMean = getMean;
        temperature.getMode = getMode;

        return temperature;
    }

    const temp = new TempTracker();
    const min = 0;
    const max = 110;

    for (let i = 0; i < 17000; i++) {
        temp.insert(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    temp.getMax();
    temp.getMin();
    temp.getMean();
    temp.getMode();

    /*****************************************/
    /*****************************************/
    /*****************************************/

    // their solution:
})();