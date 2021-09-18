import { print } from "introcs";
import { Node, toString, cons, first, rest } from "./list";

export let main = () => {
    let ages = cons(18, cons(21, cons(16, cons(23, cons(22, null)))));
    print(toString(ages));

    let agesInBar = bouncer(ages);
    print(toString(agesInBar));
};

let bouncer = (list: Node<number>): Node<number> => {
    if (list === null) {
        return null;
    } else {
        let age = first(list);
        if (age < 21) {
            bouncer(rest(list));
        } else {
            
        }
        return null;
    }
};

main();