import { forward, left, setSpeed, moveTo, setOnClick } from "introcs/turtle";

export let main = async () => {
    setSpeed(Infinity);

    // TODO #2 - Place a Star at 100, 100

};

let placeStar = (x: number, y: number): void => {
    // TODO - Place a Star and Generate Randomly
    
};

let star = (points: number, diameter: number, angle: number): void => {
    let i = 0;
    while (i < points) {
        forward(diameter);
        left(angle);
        i++;
    }
};

main();