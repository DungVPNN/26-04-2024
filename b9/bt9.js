"use strict";
class Book1 {
    constructor(id, name, title, author, stock, status) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    GiamBook() {
        if (this.stock > 0) {
            this.stock--;
        }
        else {
            console.log("Không đủ sách để mượn");
        }
    }
    TangBook() {
        this.stock++;
    }
    traBook() {
    }
}
class Member {
    constructor(id, name, contact, books, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = books;
        this.status = status;
    }
    TangBook(book) {
        if (book.stock > 0) {
            this.books.push(book);
            book.TangBook();
        }
        else {
            console.log("Không đủ sách để mượn.");
        }
    }
    traBook(book) {
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook() {
    }
    showBooks() {
    }
}
