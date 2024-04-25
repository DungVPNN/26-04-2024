class Student12 {
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
class Classroom1 {
    private students: Student[];
    private allStudents: Student[];

    constructor() {
        this.students = [];
        this.allStudents = [];
    }
    addStudent(student: Student12): void {
        this.students.push(student);
        this.allStudents.push(student);
    }
    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            this.allStudents.push(removedStudent);
        }
    }
}