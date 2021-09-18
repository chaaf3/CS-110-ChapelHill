// TODO: Add Honor Code Header
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
/*
 * 1. count
 * Given an array of numbers and a number to search for, returns a count of the
 * number of times the number occurs in the array.
 */
export let count = (a: number[], b: number): number => {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            counter++;
        }
    }
    return counter;
};
export let max = (a: number[]): number => {
    if (a.length === 0) {
        return Number.MIN_VALUE;
    }
    let max = -99999999;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
};

export let has = (a: number[], n: number): boolean => {
    let answer = false;
    for (let i = 0; i < a.length; i++) {
        if ( a[i] === n) {
            answer = true;
        }
    }
    return answer;
};

export let all = (a: number[], n: number): boolean => {
    let answer = true;
    if (a.length === 0) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (n !== a[i]) {
            answer = false;
        }
    }
    return answer;
};

export let equals = (a1: number[], a2: number[]): boolean => {
    let final = true;
    if (a1.length === a2.length) {
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                final = false;
            }
        }
    } else if (a1.length !== a2.length) {
        return false;
    }
    return final;
};

export let cycle = (upper: number, count: number): number[] => {
    let answer: number[] = [];
    if (upper <= 0 || count <= 0) {
        return answer;
    }
    for (let i = 0; i < count; i ++) {
        answer[i] = i % upper + 1;
        }
    return answer;
};

export let concat = (first: number[], second: number[]): number[] => {
    let final: number[] = [];
    for (let i = 0; i < first.length; i ++) {
        final[i] = first[i];
    }
    for (let i = 0; i < second.length; i ++) {
        final[first.length + i] = second[i];
    }
    return final;
};

export let sub = (a: number[], start: number, end: number): number[] => {
    let final: number[] = [];
    if (a.length === 0) {
        return a;
    }
    if (start <= 0) {
        start = 0;
    }
    if (end > a.length) {
        end = a.length;
    }
    let indexInitial = 0;
    indexInitial = start;
    for (let i = start; i < end; i++) {
        final[i - indexInitial] = a[i];
    }
    return final;
};

export let splice = (firstArray: number[], index: number, secondArray: number[]): number[] => {
    let final: number[] = [];
    if (index <= 0) {
        final = concat(secondArray, firstArray);
        return final;
    } else if (index >= firstArray.length) {
        final = concat(firstArray, secondArray);
        return final;
    }
    final = sub(firstArray, 0, index);
    final = concat(final, secondArray);
    final = concat(final, sub(firstArray, index, firstArray.length));
    return final;

};

























