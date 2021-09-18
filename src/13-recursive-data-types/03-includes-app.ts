import { print } from "introcs";
import { Node, cons, first, rest, toString } from "./list";

export let main = async () => {
    let names = cons("Carol", cons("Kevin Bacon", cons("Roy", null)));
    print("names: " + toString(names));

    print("Kevin Bacon is in the names list...");
    print(includes(names, "Kevin Bacon"));
};

// TODO: Implement the includes Function
let includes = (list: Node, search: string): boolean => {
    if (list === null) {
        return false;
    } else if (first(list) === "Kevin Bacon") {
        return true;
    } else {
        includes(rest(list), "kevin Bacon");
        return false;
    }
};

main();