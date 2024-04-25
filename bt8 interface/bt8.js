"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log("Speeding up. Current speed: " + this.speed);
    }
    slowDown() {
        this.speed -= 10;
        console.log("Slowing down. Current speed: " + this.speed);
    }
    stop() {
        this.speed = 0;
        console.log("Vehicle stopped.");
    }
}
const car = new Vehicle(30);
