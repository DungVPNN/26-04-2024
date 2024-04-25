interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
        }
speedUp(): void {
    this.speed += 10;
    console.log("Speeding up. Current speed: " + this.speed);
    }
slowDown(): void {
    this.speed -= 10;
    console.log("Slowing down. Current speed: " + this.speed);
    }
stop(): void {
    this.speed = 0;
    console.log("Vehicle stopped.");
    }
}
const car = new Vehicle(30);