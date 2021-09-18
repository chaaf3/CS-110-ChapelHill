/* Data Structure: Linked List */

export class Node {
    data: string = "";
    next: Node = null;
}

/* Constructor */

export let cons = (data: string, next: Node): Node => {
    let n = new Node();
    n.data = data;
    n.next = next;
    return n;
};

/* Selectors */

export let first = (n: Node): string => {
    return n.data;
};

export let rest = (n: Node): Node => {
    return n.next;
};

/* Helper Functions */

export let toString = (n: Node): string => {
    if (n === null) {
        return "NULL";
    } else {
        return first(n) + " → " + toString(rest(n));
    }
};

export let listify = (items: string[]): Node => {
    // A helper function *inside* another function.
    // It is only defined inside of the listify function!
    // We'll discuss nested function definitions like this,
    // called closures, after this unit on recursion.
    let builder = (i: number): Node => {
        if (i === items.length) {
            return null;
        } else {
            return cons(items[i], builder(i + 1));
        }
    };
    return builder(0);
};