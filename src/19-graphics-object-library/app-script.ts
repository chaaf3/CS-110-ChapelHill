import { print, random } from "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Line,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";
import { numberTypeAnnotation } from "babel-types";

/** Constants */
const RADIANS = 2 * Math.PI;
const PERIOD = 5; // seconds
const MS_IN_S = 1000;

/** Global Variables */
let artboard = new SVG("artboard");

/** Begin main program */
export let main = async () => {
    let shapes = new Group();
    print("It works");
    let axes = new Axes(100, 100);
    shapes.add(axes.getShapes());

    // TODO draw circles
    let count = 10;
    for (let i = 0; i < count; i++) {
        let c = new Circle(5, i * 10 - 45, 0);
        shapes.add(c);
    }


    let red = 0;
    let green = 0;
    let blue = 1;
    // c.fill = new Color(red, green, blue);

    let r: Rectangle = new Rectangle(10, 10);
    r.y = -20;
    r.x = -10;
    shapes.add(r);
    artboard.render(shapes);
};

// change
main();