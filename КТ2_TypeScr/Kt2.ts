abstract class Publisher {
    title: string;
    author: string;
    pubYear: number;
    copies: number;

    constructor(title: string, author: string, pubYear: number, copies: number) {
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.copies = copies;
    }



    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    getpubYear(): number {
        return this.pubYear;
    }

    setpubYear(pubYear: number): void {
        this.pubYear = pubYear;
    }

    getCopies(): number {
        return this.copies;
    }

    setCopies(copies: number): void {
        this.copies = copies;
    }

}



class Book extends Publisher {
    pages: number;

    constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
        super(title, author, pubYear, copies);
        this.pages = pages;
    }
}



class Magazine extends Publisher {
    issue: number;

    constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
        super(title, author, pubYear, copies);
        this.issue = issue;
    }
}



interface Reception {
    delivery(): void;
    receive(): void;
}



class Reader {
    firstname: string;
    lastname: string;
    items: Publisher[];

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.items = [];
    }

    

    getFirstname(): string {
        return this.firstname;
    }

    setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    getLastname(): string {
        return this.lastname;
    }

    setLastname(lastname: string): void {
        this.lastname = lastname;
    }



    checkOut(item: Publisher): void {
        if (item.getCopies() > 0 && this.items.length < 3) {
            item.setCopies(item.getCopies() - 1);
            this.items.push(item);
            console.log(`${this.firstname} ${this.lastname} взял ${item.getTitle()}`);
        } else {
            console.log(`Нельзя выдать ${item.getTitle()} ${this.firstname} ${this.lastname}`);
        }
    }

    return(item: Publisher): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            item.setCopies(item.getCopies() + 1);
            this.items.splice(index, 1);
            console.log(`${this.firstname} ${this.lastname} вернул ${item.getTitle()}`);
        } else {
            console.log(`У ${this.firstname} ${this.lastname} нет ${item.getTitle()}`);
        }
    }
}



class Library {
    publications: Publisher[];

    constructor() {
        this.publications = [];
    }

    addPublication(publication: Publisher): void {
        this.publications.push(publication);
        console.log(`Добавлена ${publication.getTitle()} в библиотеку`);
    }

    removePublication(title: string): void {
        const index = this.publications.findIndex(publication => publication.getTitle() === title);
        if (index !== -1) {
            this.publications.splice(index, 1);
            console.log(`Удалена ${title} из библиотеки`);
        } else {
            console.log(`${title} не найдена в библиотеке`);
        }
    }
}



const book1 = new Book('Book ', 'Author ', 2020, 5, 200);
const magazine1 = new Magazine('Magazine ', 'Author ', 2021, 3, 10);
const reader1 = new Reader('boy', 'girl');
const library = new Library();



library.addPublication(book1);
library.addPublication(magazine1);
reader1.checkOut(book1);
reader1.checkOut(magazine1);
reader1.checkOut(book1);
reader1.return(book1);
library.removePublication('Book');
