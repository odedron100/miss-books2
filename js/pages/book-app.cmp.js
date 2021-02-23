import { bookService } from '../service/book-service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from '../pages/book-details.cmp.js'

export default {
  template: `
        <section class="book-app">
          <book-filter @filtered="setFilter"></book-filter>
          <book-list :books="booksToShow" @selected="selectBook" />
          <book-details v-if="selectedBook" :book="selectedBook" />
        </section>
    `,
  data() {
    return {
      books: null,
      filterBy: null,
      selectedBook: null,
    }
  },
  methods: {
    loadBooks() {
      bookService.query()
        .then(books => this.books = books)
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    selectBook(book) {
      console.log('book', book);
      this.selectedBook = book;
      console.log('this.selectedBook', this.selectedBook);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      const searchStr = this.filterBy.byTitle.toLowerCase()
      const booksToShow = this.books.filter(book => {
        console.log('book', book);
        return book.title.toLowerCase().includes(searchStr)
      })
      return booksToShow
    }
  },
  components: {
    bookList,
    bookDetails,
    bookFilter
  },
  created() {
    this.loadBooks();
  }
}
