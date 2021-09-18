/*
 *
 * Author:
 *
 * ONYEN:
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */

/** Import Test Helpers */
import { testNumber, testArray, testBoolean } from "./test-util";

// TODO: Import functions as you write them
import { count, max, has, all, equals, cycle, concat, sub, splice } from "./array-utils";

export let main = async () => {
    
    // Part 1. count
    // Use Cases
    testNumber("count([10, 20], 20)", 1, count([10, 20], 20));
    testNumber("count([20, 20], 20)", 2, count([20, 20], 20));
    // Edge Cases
    testNumber("count([], 20)", 0, count([], 20));
    testNumber("count([10, 30], 20)", 0, count([10, 30], 20));

    testNumber("max([1,2,3,4,5])", 5, max([1, 2, 3, 4, 5]));
    testNumber("max([10, 8, 6, 4, 2, 0])", 10, max([10, 8, 6, 4, 2, 0]));
    testNumber("max([1.2, 3.5, 7.3])", 7.3, max([1.2, 3.5, 7.3]));

    testBoolean("has([1, 2, 3], 2)", true, has([1, 2, 3], 2));
    testBoolean("has([1, 2, 3], 4)", false, has([1, 2, 3], 4));
    testBoolean("has([], 2)", false, has([], 2));

    testBoolean("all([1, 1, 1], 1)", true, all([1, 1, 1], 1));
    testBoolean("all([1, 2, 3], 2)", false, all([1, 2, 3], 2));
    testBoolean("all([], 1)", false, all([], 1));

    testBoolean("equals([1, 2], [1, 2])", true, equals([1, 2], [1, 2]));
    testBoolean("equals([1, 2], [1])", false, equals([1, 2], [1]));
    testBoolean("equals([], [])", true, equals([], []));

    testArray("cycle(3, 4)", [1, 2, 3, 1], cycle(3, 4));
    testArray("cycle(1, 2)", [1, 1], cycle(1, 2));
    testArray("cycle(-2, 5)", [], cycle(-2, 5));

    testArray("concat([1, 2], [3, 4])", [1, 2, 3, 4], concat([1, 2], [3, 4]));
    testArray("concat([3, 4], [2, 3])", [3, 4, 2, 3], concat([3, 4], [2, 3]));
    testArray("concat([], [3, 4])", [3, 4], concat([], [3, 4]));

    testArray("sub([0, 1, 2, 3, 4], 0, 3)", [0, 1, 2], sub([0, 1, 2, 3, 4], 0, 3));
    testArray("sub([1, 2, 3, 4], 1, 3)", [2, 3], sub([1, 2, 3, 4], 1, 3));
    testArray("sub([], 1, 2)", [], sub([], 1, 2));

    testArray("splice([1, 2], 4, [3, 4])", [1, 2, 3, 4], splice([1, 2], 4, [3, 4]));
    testArray("splice([1, 4], 1, [2, 3])", [1, 2, 3, 4], splice([1, 4], 1, [2, 3]));
    testArray("splice([3, 4], -5, [1, 2])", [1, 2, 3, 4], splice([3, 4], -5, [1, 2]));
};

main();