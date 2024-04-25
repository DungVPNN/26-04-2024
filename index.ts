abstract class Employee{
    name:string
    constructor(name:string){
        this.name=name
    }
    // getFullName(){
    //     return this.name
    // }
    abstract getFullName():void
    abstract getAge():void
    // đốivoiws phuongư thức trong abs thì chỉ tên phương thức kiểu dữ liệu 
    // trả về không có phần body
}
// cách khởi tạo đối tượng abs
// thêm từ khóa abs vào đầu class 
// Intance:
// let emp1= new Employee("trang")
// emp1 được gọi là 1 intance của class Emplyeee
// đối với ab thì không cho phep khởi tạo đói tượng intance được




class Student extends Employee{
    private age:number;
    constructor(age:number,name:string){
        super(name)
        this.age=age
        this.name=name
    }
    getFullName():void{

    }
}

class Person {
    name:string;
    constructor(name:string){
        this.name=name
    }
    getFullName(){

    }
}
class Person1 extends Person{
    // nếu triển khai phương thức của class cha thì gọi và overriding ghi đè phương thức
}
/*
Tạo 1 class con kế thừa class Employee 
implement : triển khai
bắt buộc phải triển khai tất cả các phương thức của class abs
*/
abstract class Employee1 extends Employee {
    address:string;
    constructor(address:string,name:string){
        super(name);
        this.name=name
        this.address=address
    }
}