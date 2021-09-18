import { print } from "introcs";

export let main = async () => {
    print("Enter main()");
    f(2);
    print("Exit main()");
};

let f = (n: number): void => {
    print("Enter f(" + n + ")");
    if (n <= 0) {
        print("Base Case!");
    } else {
        f(n - 1);
    }
    print("Exit f(" + n + ")");
};

main();