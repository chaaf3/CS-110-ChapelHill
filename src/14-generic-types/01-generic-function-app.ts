import { print } from "introcs";

export let main = async () => {
    let a = cons("hello, world", null);
    let b = cons(110, null);

    print(a.data);
    print(b.data);
};

export class Node<T> {
    data: T;
    next: Node<T> = null;
}

// TODO: Define cons using generic types.
export let cons = <T> (data: T, next: Node<T>): Node<T> => {
    let n = new Node<T>();
    n.data = data;
    n.next = next;
    return n;
};

main();