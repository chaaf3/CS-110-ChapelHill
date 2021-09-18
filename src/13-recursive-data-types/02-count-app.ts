import { print } from "introcs";
import { Node, cons, first, rest, toString } from "./list";

export let main = async () => {
    
    // Establish a List of values
    let names = cons("James Franco", cons("Rameses", cons("Carol", null)));
    print("names: " + toString(names));

    // Print the number of values in the List
    print("The number of names in the list is...");
    print(count(names));

};

// TODO
let count = (list: Node): number => {
    if (list === null) {
        return 0;
    } else {
        return 1 + count(rest(list));
    }
};

main();