import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

// https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20javascript

// const KEY = 'books-from-api';

// export const addBookService = {
//   getBookFromApi,
//   addGoogleBook
// }

// function getBookFromApi(bookSearch) {
//   let booksFromApi = utilService.loadFromStorage(KEY) || {};
//   if (booksFromApi[bookSearch]) {
//     return Promise.resolve(booksFromApi[bookSearch]);
//   }
//   return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookSearch}`)
//     .then(Response => Response.json())
//     .then(data => {
//       booksFromApi[bookSearch] = data;
//       utilService.saveToStorage(KEY, booksFromApi);
//       return data;
//     });
// }

// function addGoogleBook(googleBook) {
//   let books = utilService.loadFromStorage(KEY);
//   let book = getEmptyBook(googleBook)
//   books.push(book);
//   utilService.saveToStorage(KEY, books)
// }

// function getEmptyBook(googleBook) {
//   return {
//     id: googleBook.id,
//     title: googleBook.volumeInfo.title,
//     // subtitle: googleBook.volumeInfo.subtitle,
//     authors: googleBook.volumeInfo.authors,
//     publishedDate: googleBook.volumeInfo.publishedDate,
//     description: googleBook.volumeInfo.description,
//     // pageCount: googleBook.volumeInfo.industryIdentifiers,
//     // categories: googleBook.volumeInfo.industryIdentifiers['categories'],
//     thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
//     // language: googleBook.volumeInfo.industryIdentifiers['language'],
//     listPrice: { amount: 102, currencyCode: 'ILS', isOnSale: false },
//   }
// }
