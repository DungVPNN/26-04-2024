class Book1 {
    id:number
    name:string
    title:string
    author:string
    stock:number
    status:boolean
    constructor(id:number, name:string, title:string, author:string, stock:number, status:boolean){
        this.id=id
        this.name=name
        this.title=title
        this.author=author
        this.stock=stock
        this.status=status

    }
    GiamBook(): void {
        if (this.stock > 0) {
            this.stock--;
        } else {
            console.log("Không đủ sách để mượn");
        }
    }
    TangBook(): void {
        this.stock++;
    }
    traBook():void{

    }
}
class Member {
    id: number;
    name: string;
    contact: string;
    books:Book1[];
    status: string;
    constructor(id: number, name: string, contact: string, books: Book1[], status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = books;
        this.status = status;
    }
    TangBook(book:Book1):void{
        if (book.stock > 0) {
            this.books.push(book);
            book.TangBook();
        } else {
            console.log("Không đủ sách để mượn.");
        }
    }
    traBook(book:Book1):void{
        
    }
}

class LendedBook {
    memberId:number
    bookId:number
    dueDate:number
    constructor(memberId:number, bookId:number, dueDate:number){
        this.memberId=memberId
        this.bookId=bookId
        this.dueDate=dueDate
    }
}
class Library {
    books:Book1[]
    members:Member[]
    constructor(){
        this.books=[]
        this.members=[]
    }
    addBook():void{

    }
    showBooks(){

    }
}