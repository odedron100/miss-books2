// import { addBookService } from '../service/add-book-service.js'
import { bookService } from '../service/book-service.js'
import apiBooks from '../cmps/books-from-api.cmp.js'

export default {
  template: `
  <div class="add-book-container">
    <section class="add-book">
        <h1>Add book</h1>
          <input class="add-book-input" v-model="bookForSearch" v-on:keyup.13="onAsk"></input>
    </section>
    <section v-for="book in books" :key="book.id">
      <apiBooks :book="book" @add="addBook"/>
    </section>
  </div>
   `,
  data() {
    return {
      bookForSearch: '',
      books: null,
    }
  },
  methods: {
    // onAsk() {
    //   addBookService.getBookFromApi(this.bookForSearch)
    //     .then(books => this.books = books)
    // },
    onAsk() {
      let booksPrm = bookService.getBookFromApi(this.bookForSearch);
      booksPrm.then(res => {
        this.books = res.items;
      })
      this.bookForSearch = ''
    },
    addBook(googleBook) {
      //TODO add to books array
      bookService.addGoogleBook(googleBook)
      console.log('books Adeed');
    }

    // renderAns(ans) {
    //   console.log('ans', ans);
    //   // const strHtml = ans.map(({ country, fifa_code }) => `<h2 class="team-name" onclick="onClickTeam('${fifa_code}')">${country}</h2>`).join('');
    //   // document.querySelector('.teams-container').innerHTML = strHtml;
    // }
  },
  components: {
    apiBooks
  }

}
