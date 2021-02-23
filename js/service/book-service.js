import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'



const BOOKS_KEY = 'books';
const gbooks = _createbooks();

export const bookService = {
  query,
  remove,
  save,
  getEmptybook,
  getById
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
    storageService.postMany(BOOKS_KEY, books)
    books = utilService.loadFromStorage(BOOKS_KEY);
    //   books.push(_createbook('Audu Mea', 300));
    //   books.push(_createbook('Fiak Ibasa', 120));
    //   books.push(_createbook('Subali Pesha', 100));
    //   books.push(_createbook('Mitsu Bashi', 150));
    //   utilService.saveToStorage(BOOKS_KEY, books)
    // }
    return books;
  }

  // function _createbook(vendor, maxSpeed = 250) {
  //   const book = {
  //     id: utilService.makeId(),
  //     vendor,
  //     maxSpeed,
  //   }
  //   return book;
}
