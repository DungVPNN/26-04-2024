"use strict";
class Student1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Students in the classroom:");
        for (let student of this.students) {
            console.log("ID:", student.getId(), ", Name:", student.getName());
        }
    }
}
