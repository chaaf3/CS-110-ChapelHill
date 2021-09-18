/** Import Test Helpers */
import { testArray } from "./test-util";

import { fillZeros, fillRange } from "./array-functions";

export let main = async () => {
    
    // fillZeros Use Cases
    testArray("fillZeros(1)", [0], fillZeros(1));
    testArray("fillZeros(2)", [0, 0], fillZeros(2));
    // fillZeros Edge Cases
    testArray("fillZeros(-1)", [], fillZeros(-1));

    // fillRange Use Cases
    testArray("fillRange(0, 2)", [0, 1, 2], fillRange(0, 2));
    // TODO: Add another use case
    testArray("fillRange", [0, 1, 2], fillRange(0, 2));
    // TODO: Add an edge case

};

main();