export default {
  template: `
    <section class="book-filter">
        <div class="search-book-container">
          <label> Search a book: </label>
          <input class="search-input" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.byTitle">
        </div>
        <router-link class="add-book-button" to="/addBook">Add book </router-link>
    </section>
    `,
  data() {
    return {
      filterBy: {
        byTitle: '',
      }
    }
  },
  methods: {
    setFilter() {
      this.$emit('filtered', this.filterBy)
    }
  }
}
