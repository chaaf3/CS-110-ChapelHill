import { print } from "introcs";

export let main = async () => {
    let a = [1, 2, 3, 4];
    let b = a.filter((x) => x > 2)
             .map((x) => x * 2)
             .reduce((m, x) => m + x, 0)
             ;
    print(b);

    print(a.every((x) => x  % 2 === 0));
};

main();