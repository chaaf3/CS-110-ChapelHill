/**
 * Author: 
 *
 * ONYEN: 
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */


import { print, csvToArray } from "introcs";
import { makeBracket } from "./bracket";

// Player Class
export class Player {
    team: string = "";
    season: number = 0;
    conference: string = "";
    winPercent: number = 0;
    avgPoints: number = 0;
    player: string = "";
    gamesPlayed: number = 0;
    gamesStarted: number = 0;
    avgMinutesPerGame: number = 0;
    fieldGoalPercent: number = 0; // field goals; all goals except free throws
    twoPointPercent: number = 0;
    threePointPercent: number = 0;
    freeThrowPercent: number = 0;
    avgReboundsPerGame: number = 0;
    avgAssistsPerGame: number = 0;
    avgStealsPerGame: number = 0;
    avgBlocksPerGame: number = 0;
    avgTurnoversPerGame: number = 0;
    avgPointsPerGame: number = 0;
    coach: string = "";
}

// Functional Interfaces
interface Predicate<T> {
    (item: T): boolean;
}    

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let data = await csvToArray("NCAA Data", Player);

    // TODO: 2.8 Print Report -- using: getSeasonMVP, avgTotalPoints, and numAboveAvgPts
    print("SeasonMVP: " + getSeasonMVP(data));
    print(avgTotalPoints(data));
    print("Total number of players who scored above the average number of points: " + numAboveAvgPoints(data));
    // TODO: 3.3 Generate Bracket -- Use makeBracket

};

// TODO: 1.1-1.3 Filter, Map, Reduce
export let filter = <T>(list: T[], test: Predicate<T>): T[] => {
    let answer = [];
    if (list.length === 0) {
        return null;
    }
    for (let i = 0; i < list.length; i++) {
        if (test(list[i]) === true) {
            answer[answer.length] = list[i];
            }
        }
    return answer;
};

export let map = <T, U>(list: T[], change: Transform<T, U>): U[] => {
    let answer = [];
    if (list.length === 0) {
        return null;
    }
    for (let i = 0; i < list.length; i++) {
        answer[answer.length] = change(list[i]);
    }
    return answer;
};

export let reduce = <T, U>(list: T[], reduce: Reducer<T, U>, memo: U): U => {
    for (let i = 0; i < list.length; i++) {
        memo = reduce(memo, list[i]);
    }
    return memo;
};
// TODO: 2.1 reduceByPoints
export let reduceByMaxPoints = <T, U>(p1: Player, p2: Player): Player => {
    if (p1.avgPointsPerGame >= p2.avgPointsPerGame) {
        return p1;
    } else {
        return p2;
    }
};

// TODO: 2.2 getSeasonMVP
export let getSeasonMVP = <T, U>(list: Player[]): Player => {
    if (list.length === 0) {
        return null;
    }
    let highNumber = -5;
    let highIndex = -5;
    for (let i = 0; i < list.length; i++) {
        if (list[i].avgPointsPerGame > highNumber) {
            highIndex = i;
            highNumber = list[i].avgPointsPerGame;
        }
    }
    return list[highIndex];
};

// TODO: 2.3 mapToPoints
export let mapToPoints = <T, U>(p1: Player): number => {
    return p1.avgPointsPerGame;
};

// TODO: 2.4 sum
export let sum = <T, U>(n1: number, n2: number): number => {
    return n1 + n2;
};

// TODO: 2.5 avgTotalPoints
export let avgTotalPoints = <T, U>(list: Player[]): number => {
    let final = 0;
    for (let i = 0; i < list.length; i++) {
        final += list[i].avgPointsPerGame;
    }
    final = final / list.length;
    return final;
};

// TODO 2.6 aboveAvgPoints
export let aboveAvgPoints = <T, U>(player: Player): boolean => {
    return player.avgPointsPerGame > 6.094696156323789;
};

// TODO 2.7 numAboveAvgPoints
export let numAboveAvgPoints = <T, U>(list: Player[]): number => {
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].avgPointsPerGame > 6.094696156323789) {
            counter++;
        }
    }
    return counter;
};

// TODO: 3.1 playerScorer
export let playerScorer = (player: Player): number => {
    let answer = 0;
    answer = player.avgPointsPerGame + player.avgBlocksPerGame - player.avgTurnoversPerGame;
    return answer;
};

// TODO 3.2 winner
/*export let winner = (list1: Player[], teama: string, teamb: string): string => {
    let onlyteama = filter(teama,
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < list1.length; i++) {
        team1 += playerScorer(list1[i]);
    }
    for (let i = 0; i < list2.length; i++) {
        team2 += playerScorer(list2[i]);
    }
    if (team1 >= team2) {
        return list1[0].team;
    } else {
        return list2[0].team;
    }
};
*/
main();