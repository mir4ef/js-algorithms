/**
 * from https://www.interviewcake.com
 * Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 * For example:
 *
 * var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
 * getMaxProfit(stockPricesYesterday);
 * // returns 6 (buying for $5 and selling for $11)
 *
 * No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
 **/

(function () {
    'use strict';

    const stockPricesYesterday1 = [10, 7, 5, 8, 11, 9];
    const stockPricesYesterday2 = [10, 7, 5, 8, 11, 9, 12, 4, 3];
    const stockPricesYesterday3 = [15, 10, 7, 5, 1];

    function getMaxProfit(prices) {
        if (prices.length < 2) {
            throw new Error('Need at least two prices!');
        }

        let maxProfit = prices[1] - prices[0];

        for (let i = 1; i < prices.length; i++) {
            const buy = Math.min.apply(null, prices.slice(0, i));
            const sell = prices[i];
            const profit = sell - buy;

            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }

    getMaxProfit(stockPricesYesterday1); // 6
    getMaxProfit(stockPricesYesterday2); // 7
    getMaxProfit(stockPricesYesterday3); // -2

    /*****************************************/
    /*****************************************/
    /*****************************************/

    // their solution:
    function getMaxProfitCake(stockPricesYesterday) {

        // make sure we have at least 2 prices
        if (stockPricesYesterday.length < 2) {
            throw new Error('Getting a profit requires at least 2 prices');
        }

        // we'll greedily update minPrice and maxProfit, so we initialize
        // them to the first price and the first possible profit
        var minPrice = stockPricesYesterday[0];
        var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

        // start at the second (index 1) time
        // we can't sell at the first time, since we must buy first,
        // and we can't buy and sell at the same time!
        // if we started at index 0, we'd try to buy /and/ sell at time 0.
        // this would give a profit of 0, which is a problem if our
        // maxProfit is supposed to be /negative/--we'd return 0!
        for (var i = 1; i < stockPricesYesterday.length; i++) {
            var currentPrice = stockPricesYesterday[i];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            var potentialProfit = currentPrice - minPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);

            // update minPrice so it's always
            // the lowest price we've seen so far
            minPrice = Math.min(minPrice, currentPrice);
        }

        return maxProfit;
    }
})();