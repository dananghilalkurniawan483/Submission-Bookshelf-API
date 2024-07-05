// Contoh definisi model untuk Book
class Book {
    constructor(id, name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.reading = reading;
        this.insertedAt = insertedAt;
        this.updatedAt = updatedAt;
        this.finished = readPage === pageCount;
    }
}

module.exports = Book;
