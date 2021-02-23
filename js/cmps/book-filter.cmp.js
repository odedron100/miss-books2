export default {
  template: `
    <section class="book-filter">
        <label> Search a book: </label>
        <input class="search-input" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.byTitle">
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
