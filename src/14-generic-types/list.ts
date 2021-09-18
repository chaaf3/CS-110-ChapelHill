/* Data Structure: Linked List */
/* Improved since Lecture 13: Generic Definitions */

export class Node<T> {
    data: T;
    next: Node<T> = null;
}

/* Constructor */

export let cons = <T> (data: T, next: Node<T>): Node<T> => {
    let n = new Node<T>();
    n.data = data;
    n.next = next;
    return n;
};

/* Selectors */

export let first = <T> (n: Node<T>): T => {
    return n.data;
};

export let rest = <T> (n: Node<T>): Node<T> => {
    return n.next;
};

/* Helper Functions */

export let toString = <T> (n: Node<T>): string => {
    if (n === null) {
        return "NULL";
    } else {
        return first(n) + " → " + toString(rest(n));
    }
};

export let listify = <T> (items: T[]): Node<T> => {
    // A helper function *inside* another function.
    // It is only defined inside of the listify function!
    // We'll discuss nested function definitions like this,
    // called closures, after this unit on recursion.
    let builder = (i: number): Node<T> => {
        if (i === items.length) {
            return null;
        } else {
            return cons(items[i], builder(i + 1));
        }
    };
    return builder(0);
};