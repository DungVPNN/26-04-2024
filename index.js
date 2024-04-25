"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abs
// thêm từ khóa abs vào đầu class 
// Intance:
// let emp1= new Employee("trang")
// emp1 được gọi là 1 intance của class Emplyeee
// đối với ab thì không cho phep khởi tạo đói tượng intance được
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullName() {
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    getFullName() {
    }
}
class Person1 extends Person {
}
/*
Tạo 1 class con kế thừa class Employee
implement : triển khai
bắt buộc phải triển khai tất cả các phương thức của class abs
*/
class Employee1 extends Employee {
    constructor(address, name) {
        super(name);
        this.name = name;
        this.address = address;
    }
}
