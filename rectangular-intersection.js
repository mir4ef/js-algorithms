/**
 * from https://www.interviewcake.com
 * Write a function to find the rectangular intersection of two given love rectangles.
 * As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.
 *
 * They are defined as objects like this:
 *
 * var myRectangle = {
 *
 *  // coordinates of bottom-left corner
 *  leftX: 1,
 *  bottomY: 5,
 *
 *  // width and height
 *  width: 10,
 *  height: 4,
 *
 * };
 *
 * Your output rectangle should use this format as well.
 */

(function () {
    'use strict';

    const rect1 = {
        leftX: 1,
        bottomY: 5,
        width: 10,
        height: 4
    };
    const rect2 = {
        leftX: 2,
        bottomY: 3,
        width: 5,
        height: 6
    };

    function getRangeOverlap(point1, length1, point2, length2) {
        const leftBottom = Math.max(point1, point2);
        const rightTop = Math.min(point1 + length1, point2 + length2);

        if (leftBottom >= rightTop) {
            return { start: null, length: null };
        }

        const len = rightTop - leftBottom;

        return { start: leftBottom, length: len };
    }

    function findOverlap(obj1, obj2) {
        const xOverlap = getRangeOverlap(obj1.leftX, obj1.width, obj2.leftX, obj2.width);
        const yOverlap = getRangeOverlap(obj1.bottomY, obj1.height, obj2.bottomY, obj2.height);

        if (!xOverlap.length || !yOverlap.length) {
            return {
                leftX: null,
                bottomY: null,
                width: null,
                height: null
            }
        }

        return {
            leftX: xOverlap.start,
            bottomY: yOverlap.start,
            width: xOverlap.length,
            height: yOverlap.length
        };
    }

    findOverlap(rect1, rect2);

    /*****************************************/
    /*****************************************/
    /*****************************************/

    // their solution:
    function findRangeOverlap(point1, length1, point2, length2) {

        // find the highest start point and lowest end point.
        // the highest ("rightmost" or "upmost") start point is
        // the start point of the overlap.
        // the lowest end point is the end point of the overlap.
        var highestStartPoint = Math.max(point1, point2);
        var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

        // return null overlap if there is no overlap
        if (highestStartPoint >= lowestEndPoint) {
            return {startPoint: null, overlapLength: null};
        }

        // compute the overlap length
        var overlapLength = lowestEndPoint - highestStartPoint;

        return {startPoint: highestStartPoint, overlapLength: overlapLength};
    }

    function findRectangularOverlap(rect1, rect2) {

        // get the x and y overlap points and lengths
        var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
        var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

        // return null rectangle if there is no overlap
        if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
            return {
                leftX: null,
                bottomY: null,
                width: null,
                height: null
            };
        }

        return {
            leftX: xOverlap.startPoint,
            bottomY: yOverlap.startPoint,
            width: xOverlap.overlapLength,
            height: yOverlap.overlapLength,
        };
    }

    findRectangularOverlap(rect1, rect2);
})();