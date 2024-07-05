const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/server');

describe('Book API', () => {
    let bookId = '';

    it('should create a new book', async () => {
        const res = await request(app)
            .post('/books')
            .send({
                name: 'Book Test',
                year: 2023,
                author: 'Test Author',
                summary: 'This is a test book',
                publisher: 'Test Publisher',
                pageCount: 200,
                readPage: 50,
                reading: true,
            });

        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal('success');
        expect(res.body.data).to.have.property('bookId');
        bookId = res.body.data.bookId;
    });

    it('should get all books', async () => {
        const res = await request(app)
            .get('/books');

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('success');
        expect(res.body.data).to.have.property('books');
        expect(res.body.data.books).to.be.an('array');
    });

    it('should get a book by id', async () => {
        const res = await request(app)
            .get(`/books/${bookId}`);

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('success');
        expect(res.body.data).to.have.property('book');
        expect(res.body.data.book).to.have.property('id').equal(bookId);
    });

    it('should update a book by id', async () => {
        const res = await request(app)
            .put(`/books/${bookId}`)
            .send({
                name: 'Updated Book Test',
                year: 2024,
                author: 'Updated Author',
                summary: 'This is an updated test book',
                publisher: 'Updated Publisher',
                pageCount: 250,
                readPage: 100,
                reading: false,
            });

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('success');
    });

    it('should delete a book by id', async () => {
        const res = await request(app)
            .delete(`/books/${bookId}`);

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('success');
    });
});
