
export default {
  props: ['book'],
  template: `
      <router-link class="book-preview" :to="'/book/'+book.id">
        <div class="book-title"><span>Title</span>: {{book.title}}</div>
        <img :src="book.thumbnail"/>
        <div class="book-amount"><span>Price</span>: {{book.listPrice.amount}}$</div>
      </router-link>
      <!-- <router-link :to="'/car/edit/'+car.id">Edit</router-link> -->
      <!-- <section class="book-preview">
      </section> -->
    `,
  methods: {

  },
  components: {
  },
}
