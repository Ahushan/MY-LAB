// Class Definitions

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  // Method (function)
  displayInfo() {
    console.log(
      `Book title is ${this.title}.\nAuthor is ${this.author}.\n$ ${this.price}.\n`
    );
  }
}

// Creating Objects
const book1 = new Book("1984", "George Orwell", 300);
const book2 = new Book("Atomic Habits", "James Clear", 450);

// Calling Method
book1.displayInfo();
book2.displayInfo();