import { print, csvToList } from "introcs";
import { Node, cons, first, rest } from "introcs/list";

class Game {
    date: string = "";
    opponent: string = "";
    uncPoints: number = 0;
    opponentPoints: number = 0;
    minutes: number = 0;
    points: number = 0;
    assists: number = 0;
}

// == Functional Interfaces ==
interface Transform<T, U> {
    (item: T): U;
}

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

export let main = async () => {
    let games: Node<Game> = await csvToList("Select Games Data", Game);

    let points: Node<number> = map(games, (g) => g.points);
    
    // TODO #2 - Assign to high the result of calling reduce with arguments
    // 1. the points array
    // 2. your max reducer function
    // 3. an initial memo value of 0
    let high: number = 0;

    print("Berry's Season Record Points:");
    print(high);

    print("Total points: " + reduce(points, (memo, n) => memo + n, 0));
};

// TODO #1 - Write a function named max that is given two numbers
// and will return the larger of the two numbers. It is a Reducer.
let max: Reducer<number, number> = (memo: number, item: number): number => {
    if (memo > item) {
        return memo;
    } else {
        return item;
    }
};
// == map & reduce ==
let map = <T, U> (xs: Node<T>, f: Transform<T, U>): Node<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

let reduce = <T, U> (xs: Node<T>, f: Reducer<T, U>, memo: U): U => {
    if (xs === null) {
        return memo;
    } else {
        return reduce(rest(xs), f, f(memo, first(xs)));
    }
};

main();