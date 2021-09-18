/**
 * Author:
 *
 * ONYEN:
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting.
 */
import { print, image } from "introcs";
export let main = async () => {
    let love = "love";
    let comp = "COMP";
    let header = "Dear Pam";
    print(header);
    image("https://media1.giphy.com/media/2dQ3FMaMFccpi/giphy.gif");
    print("I " + love + " two things, You and " + comp);
};
main();
