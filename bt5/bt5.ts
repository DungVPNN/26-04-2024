class Student1 {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    showStudents(): void {
        console.log("Students in the classroom:");
        for (let student of this.students) {
            console.log("ID:", student.getId(), ", Name:", student.getName());
        }
    }
}

