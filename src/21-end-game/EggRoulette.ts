import { Carton } from "./Carton";
import { Egg } from "./Egg";

export class EggRoulette {

    carton: Carton;
    scores: number[];
    turn: number;

    constructor() {
        this.scores = [0, 0];
        this.turn = 0;
        
        this.carton = new Carton();
        
        // TODO #1.2: Call the boilEggs method
        this.boileggs();

        // TODO #4.2: Call the shuffleEggs method
        this.shuffleEggs();

    }

    // TODO #1.1: Define the method boilEggs
    boileggs(): void {
        for (let i = 0; i < this.carton.eggs.length - 4; i++) {
            this.carton.eggs[i].boil();
        }
    }

    pick(index: number): void {
        // TODO #2: pick method - logic for picking an Egg
        let egg: Egg = this.carton.eggs[index];
        if (!egg.isCracked) {
            egg.crack();
            if (egg.isRaw) {
                this.scores[this.currentPlayer()] += 1;
            }
            this.turn += 1;
        }
        
        // alert("You clicked " + index);
    }

    winner(): number {
        if (this.scores[0] === 2) {
            return 1;
        } else if (this.scores[1] === 2) {
            return 0;
        } else {
            return -1;
        }
    }

    // TODO #4: Define the method shuffleEggs
    shuffleEggs(): void {
        for (let i = 0; i < this.carton.size(); i++) {
            let random = Math.floor(this.carton.size() * Math.random());
            let temp: Egg = this.carton.eggs[i];
            this.carton.eggs[i] = this.carton.eggs[random];
            this.carton.eggs[random] = temp;
        }
    }

    currentPlayer(): number {
        return this.turn % 2;
    }

}