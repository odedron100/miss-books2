import { bookService } from '../service/book-service.js'
import { storageService } from '../service/async-storage-service.js'

export default {
  template: `
    <div class="review-details-container">
      <div class="user-review" v-for="user in users">
        <h1>review</h1>
        <div class="userName"><h3>name: </h3><p>{{user.userName}}</p></div>
        <div class="rate"><h3>Rate: </h3><p>{{user.userRate}}</p></div>
        <div class="txt"><h3>Review: </h3><p>{{user.userReviewTxt}}</p></div>
      </div>
    </div>
    `,
  data() {
    return {
      users:[]
    }
  },
  computed: {


  },
  methods: {

    },
    created() {
      const id = this.$route.params.bookId
      storageService.query(id)
      .then(users=>this.users = users)
  }
}
