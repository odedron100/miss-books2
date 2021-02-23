import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
// import book-Edit from './pages/book-edit.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
import about from './pages/about.cmp.js'
import bookReview from './pages/book-review.cmp.js'
import reviewDetails from './pages/review-details.cmp.js'
import addBook from './pages/add-book.cmp.js'


const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/book',
    component: bookApp
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/book/:bookId',
    component: bookDetails
  },
  {
    path: '/book/:bookId/review',
    component: bookReview
  },
  {
    path: '/book/:bookId/details',
    component: reviewDetails
  },
  {
    path: '/addBook',
    component: addBook
  }
]

export const myRouter = new VueRouter({ routes })
