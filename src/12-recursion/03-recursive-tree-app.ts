import { forward, left, right, moveTo, turnTo, setOnClick, setSpeed } from "introcs/turtle";

export let main = async () => {
    setSpeed(999999);
    tree(100, 300);
    setOnClick(tree);
};

let tree = (x: number, y: number) => {
    moveTo(x, y);
    turnUp(); // Face the turtle upward
    // Begin the tree by drawing the root branch!
    branch(y / 6);
};

let branch = (length: number) => {
    if (length < 5) {
        // Turn around... don't drown!
        turnAround();
    } else {
        // TODO:

        // 1. Move forward by length to establish this branch
        forward(length);
        
        // 2. Draw Left Branch
        // 2.a Turn left by leftBranchRotation amount
        let leftBranchRotation = randomGrowth();
        left(leftBranchRotation);
        // 2.b Recursively branch by 0.6 * length
        branch(.6 * length);
        // 2.c Turn right by the amount turned left to reset
        right(leftBranchRotation);
        // 3. Turn around
        turnAround();

        // 4. Draw Right Branch
        // 4.a Turn right by rightBranchRotation amount
        let rightBranchRotation = randomRotation();
        right(rightBranchRotation);
        // 4.b Recursively branch by 0.6 * length
        branch(.6 * length);
        // 4.c Turn left by rightBranchRotation amount to reset
        left(rightBranchRotation);
        // 5. Move forward by length (back to the starting point of branch)
        forward(length);
    }
};

let turnUp = (): void => {
    turnTo(-Math.PI / 2);
};

let turnAround = () => {
    left(Math.PI);
};

let randomGrowth = () => {
    return 0.3 + Math.random() * 0.5;
};

let randomRotation = () => {
    return (Math.PI / 6) + (-.1 * Math.PI) + (Math.random() * 0.2 * Math.PI); 
};

main();