export default {
  props: ['book'],
  template: `
    <section >
      <div>
          {{book.volumeInfo.title}} <button @click="addBook(book)">+</button>
      </div>
    </section>
    `,
  data() {
    return {
      booksToRender: this.books,
    }
  },
  methods: {
    addBook(book) {
      this.$emit('add', book);
      // TODO remove from books
    }
  },
  created() {
    console.log('this.book', this.book);
  }
}
