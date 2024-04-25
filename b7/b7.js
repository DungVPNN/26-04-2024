"use strict";
class Student12 {
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
class Classroom1 {
    constructor() {
        this.students = [];
        this.allStudents = [];
    }
    addStudent(student) {
        this.students.push(student);
        this.allStudents.push(student);
    }
    removeStudent(id) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            this.allStudents.push(removedStudent);
        }
    }
}
