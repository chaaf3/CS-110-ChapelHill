import { print, csvToList } from "introcs";
import { Node } from "introcs/list";
import { Game } from "./Game";
import { filter, map, reduce } from "./fmr-utils";

export let main = async () => {
    let games: Node<Game> = await csvToList("Game Data", Game);

    // TODO #2 filter
    let filtered: Node<Game> = null;
    
    // TODO #3 map
    let values: Node<number> = null;
    
    // TODO #4 reduce
    let result: number = 0;

    print("Result: " + result);
};

// Predicates
let isWin = (g: Game): boolean => {
    return g.uncPoints > g.opponentPoints;
};

let fewPoints = (g: Game): boolean => {
    return g.points < 15;
};

// Transforms
let toPoints = (g: Game): number => {
    return g.points;
};

let toAssists = (g: Game): number => {
    return g.assists;
};

// Reducers
let sum = (m: number, n: number): number => {
    return m + n;
};

let max = (m: number, n: number): number => {
    if (m > n) {
        return m;
    } else {
        return n;
    }
};

main();