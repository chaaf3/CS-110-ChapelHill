import { print } from "introcs";

let main = (): void => {
    print("Enter main()");
    f(10);
    print("Leave main()");
};

let f = (n: number): void => {
    if (n < 0) {
        print(n);
    }
    else {
    print("Enter f(" + n + ")");
    f(n - 1);
    print("Leave f(" + n + ")");
}
};

main();