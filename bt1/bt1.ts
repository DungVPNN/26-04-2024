abstract class Shape{
    name:string 
    constructor (name:string){
        this.name=name
    }
    getName(){
        return `hinh la ${this.name}`
    }
    abstract getSize():void
}
class Rectangle extends Shape {
    width:number
    height:number
    constructor(name:string,width:number,height:number){
        super(name);
        this.width=width
        this.height=height
    }
    getSize(){
        return `chieu dai ${this.width} va chieu rong ${this.height}`   
    }
}


let rectangle1 = new Rectangle("Hinh chu nhat",5,6)
console.log("ten",rectangle1.getName());
rectangle1.getSize();
