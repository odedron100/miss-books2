import BookPreview from './book-preview.cmp.js'

export default {
  props: ['books'],
  template: `
      <ul class="book-list">
        <li class="book-container" v-for="book in books" :key="book.id">
          <book-preview :book="book" @click.native="selecte(book)"/>
        </li>
      </ul>
    `,
  date() {
    return {
      selectedBook: null,
    }
  },
  methods: {
    selecte(book) {
      this.$emit('selected', book)
    }
  },
  components: {
    BookPreview
  },
}
