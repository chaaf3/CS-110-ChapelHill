import { forward, left } from "introcs/turtle";

export let main = async () => {
    spiralEdge(100);
};

let spiralEdge = (length: number): void => {
    if (length > 0) {
    forward(length);
    left(Math.PI / 2);
    spiralEdge(length - 2);
    }
};

main();