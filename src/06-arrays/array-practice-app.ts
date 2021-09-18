import { fillZeros, fillRange, sum } from "./array-functions";

import { testArray, testNumber } from "./test-util";

export let main = async () => {
    
    // TODO: Add Test Cases
    testArray("First Test", [0], fillZeros(1));
    testArray("2nd Test", [0, 0], fillZeros(2));
    testArray("fillZeros(-1)", [], fillZeros(-1));

    //testNumber("sum([1+1])")
};

main();