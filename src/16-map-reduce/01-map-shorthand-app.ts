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

/**
 * Transform is any function that takes a single value and 
 * returns another value.
 */
interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let games: Node<Game> = await csvToList("Select Games Data", Game);

    // TODO - Convert gameToPoints into an anonymous function.
    //let points: Node<number> = map(games, (g) => {return g.points; });

    //shorthand anonymous function
    let points: Node<number> = map(games, (g) => g.points);

    print("Berry's Points:");
    print(points);

    print(map(games, (g) => g.opponent));
};

let gameToPoints: Transform<Game, number> = (g) => {
    return g.points;
};

/**
 * Given a list of values, map will return a new list of values with
 * the function f applied to every element in the original list.
 */
let map = <T, U> (xs: Node<T>, f: Transform<T, U>): Node<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

main();