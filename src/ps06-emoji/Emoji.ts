/*    
 * Author: Connor Haaf
 * ONYEN:   connorh
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */


// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Circle, Rectangle, Ellipse } from "introcs/graphics";

export class FaceShape {


    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes = new Group();

        let face = new Circle(50, -20, 20);
        face.fill = this.tone;
        shapes.add(face);

        return shapes;
    }

}

// TODO: Eye class
export class Eye {
    irisColor: Color;

    constructor(irisColor: Color) {
        this.irisColor = irisColor;
    }
    shapes(): Group {
        let shapes = new Group();
        let eye = new Rectangle(5, 5, -25, -20);
        eye.fill = this.irisColor;
        shapes.add(eye);

        return shapes;
    }
}

// TODO: Mouth class
export class Mouth {
    shapes(): Group {
        let shapes = new Group();
        let mouth = new Ellipse(-20, 30, 15, 1);
        mouth.fill = new Color(20, 0, 0);
        shapes.add(mouth);

        return shapes;
    }
}
// TODO: Emoji class
export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    leftEye: Eye;
    rightEye: Eye;

    constructor() {
        this.faceShape = new FaceShape(new Color(0, .2, 0));
        this.mouth = new Mouth();
        this.leftEye = new Eye(new Color(0, 0, 5));
        this.rightEye = new Eye(new Color(0, 0, 5));
    }
    shapes(): Group {
        let shapes = new Group();
        shapes.add(this.faceShape.shapes());
        shapes.add(this.mouth.shapes());
        shapes.add(this.leftEye.shapes());
        shapes.add(this.rightEye.shapes());
        return shapes;
    }
}