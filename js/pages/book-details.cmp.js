import { bookService } from '../service/book-service.js'

export default {
  template: `
    <div class="modal-details-container">
      <div class="book-details" v-if="book">
        <div class="details-header">
          <router-link class="back-button" to="/book">Back</router-link>
          <router-link class="add-review-button" :to="'/book/'+book.id+'/review'">Add new review</router-link>
        </div>
        <div class="info">
        <h2>{{book.title}}</h2>
              <img :src="book.thumbnail"/>
              <div><h3>Author/s: </h3><p>{{formattedAuthor}}</p></div>
              <div><h3>Published: </h3><p>{{book.publishedDate}}, {{date}}</p></div>
              <div><h3>Page count: </h3><p>{{book.pageCount}} pages, {{pageCount}}</p></div>
              <div><h3>Language: </h3><p>{{language}}</p></div>

              <div><h3>Description:</h3>
              <p>{{book.description}}</p></div>
              <div><h3>Categories: </h3><p>{{categories}}</p></div>
              <div><h3>Price:</h3><p :class="{ 'high-price': isHighPrice, 'low-price': isLowPrice }">{{price}}</p> <span v-if="book.listPrice.isOnSale">ON SALE!</span></div>
          </div>
      </div>
      <div class="paging">
          <router-link :to="prevBookLink">Prev Book</router-link>
          <router-link :to="nextBookLink">Next Book</router-link>
      </div>
    </div>
    `,
  data() {
    return {
      isHighPrice: false,
      isLowPrice: false,
      book: null,
      nextBookId: null,
      prevBookId: null
    }
  },
  computed: {
    formattedAuthor() {
      return this.book.authors.join(', ')
    },
    date() {
      const yearsDiff = new Date().getFullYear() - this.book.publishedDate;
      let msg;
      if (yearsDiff > 10) {
        msg = 'Veteran book'
      } else if (yearsDiff < 1) {
        msg = 'New';
      } else {
        msg = '';
      }
      return msg;
    },
    pageCount() {
      const pageCount = this.book.pageCount;
      let msg;
      if (pageCount > 500) {
        msg = 'Long reading'
      } else if (pageCount > 200) {
        msg = 'Decent reading';
      } else if (pageCount > 100) {
        msg = 'Light reading';
      } else {
        msg = '';
      }
      return msg;
    },
    categories() {
      return this.book.categories.join(', ');
    },
    language() {
      const lang = this.book.language;
      switch (lang) {
        case 'en':
          return 'english';
        case 'he':
          return 'hebrew';
        case 'sp':
          return 'spanish';
      }
    },
    price() {
      return this.book.listPrice.amount + ' ' + this.book.listPrice.currencyCode;
    },
    nextBookLink() {
      return '/book/' + this.nextBookId;
    },
    prevBookLink() {
      return '/book/' + this.prevBookId;
    },
  },
  methods: {
    // highOrLowPrice() {
    //   if (this.book.listPrice.amount > 150) {
    //     console.log('high');
    //     this.isHighPrice = true;
    //   } else if (this.book.listPrice.amount < 20) {
    //     console.log('low');
    //     this.isLowPrice = true;
    //   } else {
    //     console.log('nothing');
    //     return;
    //   }
    // },
    loadBook() {
      const id = this.$route.params.bookId;
      bookService.getById(id)
        .then(book => {
          this.book = book;
          this.prevBookId = bookService.getPrevBookId(this.book.id)
          this.nextBookId = bookService.getNextBookId(this.book.id)
        })
    },
  },
  created() {
    const id = this.$route.params.bookId
    bookService.getById(id)
      .then(book => this.book = book)
    this.loadBook();
  },
  watch: {
    '$route.params.bookId'(id) {
      this.loadBook();
    }
  }
}
