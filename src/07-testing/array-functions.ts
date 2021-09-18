/**
 * Fill an array of length n with zeros.
 */
export let fillZeros = (n: number): number[] => {
    let a: number[] = [];
    for (let i = 0; i < n; i++) {
        a[i] = 0;
    }
    return a;
};

/**
 * Fill an array of increasing numbers from low to high, inclusive.
 */
export let fillRange = (low: number, high: number): number[] => {
    let a: number[] = [];
    for (let i = 0; i <= (high - low); i++) {
        a[i] = low + i;
    }
    return a;
};

/**
 * Given a number array and some number n, return the first index
 * the number n occurs at as an element of a. If the number n does
 * not exist in a, then returns -1.
 */
export let indexOf = (a: number[], n: number): number => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === n) {
            return i;
        }
    }
    return -1;
};