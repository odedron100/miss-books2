import { reviewService } from '../service/review-service.js';
import { storageService } from '../service/async-storage-service.js'

export default {
  template: `
    <section class="form-container">
    <header class="form-header">
      <h2> Your Review </h2>
    </header>
    <form class="form-main">
      <div class="name-div item">
        <label for="name"> Name: </label>
        <input type="text" id="name" name="name" v-model="userName"/>
      </div>
      <div class="rate-book-div item">
        <label for="rate-book">Rate book</label>
        <div class="stars">
          <span class="star1 gold-star" :class="{'draw-star':userRate>0}" @click="rateBook(1)">⭐️</span>
          <span class="star2 gold-star" :class="{'draw-star':userRate>1}" @click="rateBook(2)">⭐️</span>
          <span class="star3 gold-star" :class="{'draw-star':userRate>2}" @click="rateBook(3)">⭐️</span>
          <span class="star4 gold-star" :class="{'draw-star':userRate>3}" @click="rateBook(4)">⭐️</span>
          <span class="star5 gold-star" :class="{'draw-star':userRate>4}" @click="rateBook(5)">⭐️</span>
          <span class="star6 black-star" :class="{'remove-star':userRate>0}" @click="rateBook(1)">✩</span>
          <span class="star7 black-star" :class="{'remove-star':userRate>1}" @click="rateBook(2)">✩</span>
          <span class="star8 black-star" :class="{'remove-star':userRate>2}" @click="rateBook(3)">✩</span>
          <span class="star9 black-star" :class="{'remove-star':userRate>3}" @click="rateBook(4)">✩</span>
          <span class="star10 black-star" :class="{'remove-star':userRate>4}" @click="rateBook(5)">✩</span>
        </div>
      </div>
      <div class="review-div item">
        <label for="review">write your review</label>
        <textarea name="review" rows="4" cols="50" v-model="userReviewTxt">

        </textarea>
      </div>
      <router-link to="details">
        <button class="submit-button" @click="save">
         Save
        </button>
      </router-link>
    </form>
  </section>
    `,
     data() {
    return {
      userName:null,
      userRate:null,
      userReviewTxt:null,
    }
  },
  computed: {



  },
  methods: {
    rateBook(rate){
      this.userRate = rate;
    },
    save(){
      const id = this.$route.params.bookId
      const userReview = {
        userName: this.userName,
        userRate:this.userRate,
        userReviewTxt:this.userReviewTxt
      }
      storageService.post(id,userReview);
    }
  },
  created() {
  }

}
