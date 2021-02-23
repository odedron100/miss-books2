import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'



const BOOKS_KEY = 'books';
const gbooks = _createbooks();

export const bookService = {
  query,
  remove,
  save,
  getEmptybook,
  getById,
  getNextBookId,
  getPrevBookId,
  getBookFromApi,
  addGoogleBook
}

function query() {
  return storageService.query(BOOKS_KEY)
}

function remove(bookId) {
  return storageService.remove(BOOKS_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOKS_KEY, book)
  } else {
    return storageService.post(BOOKS_KEY, book)
  }
}

function getEmptybook() {
  return { id: '', vendor: '', maxSpeed: 0 }
}

function getById(id) {
  return storageService.get(BOOKS_KEY, id)
}

function _createbooks() {
  let books = utilService.loadFromStorage(BOOKS_KEY)
  if (!books || !books.length) {
    books = utilService.getBooks();
    utilService.saveToStorage(BOOKS_KEY, books)
    books = utilService.loadFromStorage(BOOKS_KEY);
    //   books.push(_createbook('Audu Mea', 300));
    //   books.push(_createbook('Fiak Ibasa', 120));
    //   books.push(_createbook('Subali Pesha', 100));
    //   books.push(_createbook('Mitsu Bashi', 150));
    //   utilService.saveToStorage(BOOKS_KEY, books)
    // }
    return books;
  }
}

function getNextBookId(bookId) {
  let books = utilService.loadFromStorage(BOOKS_KEY);
  var foundBook = books.find(book => bookId === book.id)
  const bookIdx = books.findIndex(book => foundBook.id === book.id)
  const nextBookId = books[bookIdx + 1].id
  return nextBookId;
}

function getPrevBookId(bookId) {
  let books = utilService.loadFromStorage(BOOKS_KEY);
  var foundBook = books.find(book => bookId === book.id)
  const bookIdx = books.findIndex(book => foundBook.id === book.id)
  const prevBookId = books[bookIdx - 1].id
  return prevBookId;
}

function getBookFromApi(bookSearch) {
  let booksFromApi = utilService.loadFromStorage(BOOKS_KEY) || {};
  if (booksFromApi[bookSearch]) {
    return Promise.resolve(booksFromApi[bookSearch]);
  }
  return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookSearch}`)
    .then(Response => Response.json())
    .then(data => {
      booksFromApi[bookSearch] = data;
      utilService.saveToStorage(BOOKS_KEY, booksFromApi);
      return data;
    });
}

function addGoogleBook(googleBook) {
  let books = utilService.loadFromStorage(BOOKS_KEY);
  let book = getEmptyBook(googleBook)
  books.push(book);
  utilService.saveToStorage(BOOKS_KEY, books)
}

function getEmptyBook(googleBook) {
  return {
    id: googleBook.id,
    title: googleBook.volumeInfo.title,
    // subtitle: googleBook.volumeInfo.subtitle,
    authors: googleBook.volumeInfo.authors,
    publishedDate: googleBook.volumeInfo.publishedDate,
    description: googleBook.volumeInfo.description,
    // pageCount: googleBook.volumeInfo.industryIdentifiers,
    // categories: googleBook.volumeInfo.industryIdentifiers['categories'],
    thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
    // language: googleBook.volumeInfo.industryIdentifiers['language'],
    listPrice: { amount: 102, currencyCode: 'ILS', isOnSale: false },
  }
}

  // function _createbook(vendor, maxSpeed = 250) {
  //   const book = {
  //     id: utilService.makeId(),
  //     vendor,
  //     maxSpeed,
  //   }
  //   return book;
// }
