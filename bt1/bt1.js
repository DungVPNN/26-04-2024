"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `hinh la ${this.name}`;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `chieu dai ${this.width} va chieu rong ${this.height}`;
    }
}
let rectangle1 = new Rectangle("Hinh chu nhat", 5, 6);
console.log("ten", rectangle1.getName());
rectangle1.getSize();
