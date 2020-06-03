<template>
  <div class="container">
    <template v-if="product === null">
      <h1>404</h1>
      <p>Taki produkt nie istnieje</p>
    </template>
    <template v-else>
      <div class="product-container">
        <img :src="product.image" class="cover">
        <div class="description">
          <h1>
            {{ product.name }}

            <small v-if="product.discountedPrice">
              Cena:
              <span class="new-price">{{ product.discountedPrice }} zł</span>
              <span class="old-price">{{ product.price }} zł</span>
            </small>
            <small v-else>Cena: {{ product.price }} zł</small>
          </h1>

          <p>{{ product.description }}</p>
          <a class="btn branded" @click="addToCart">Dodaj do koszyka</a>
        </div>
      </div>
      <div class="addComment">
        <div class="rating">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <h3>Dodaj Komentarz</h3>
        <div class="inputContainer">
          <textarea class="nickTxt" rows="1" maxlength="20">Twój nick</textarea>
          <textarea class="commentTxt" cols="56" maxlength="500" wrap="soft">Twój komentarz...</textarea>
        </div>
        <div class="commentBtn">
          <div class="btn branded">
            Zatwierdź
          </div>
        </div>
      </div>
      <h2>Opinie</h2>
      <Comment v-for="(c, key) in comments" :key="`comment-${key}`" :product-review="c" />
    </template>
  </div>
</template>

<script>

import Comment from '~/components/Comment'

export default {

  components: {
    Comment
  },

  computed: {
    product () {
      const slug = this.$route.params.slug
      const { products } = this.$store.state

      if (slug in products) {
        return products[slug]
      }
      return null
    },

    comments () {
      const { comments } = this.$store.state
      return comments.filter(c => c.ref === this.product.ref)
    }
  },

  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.$route.params.slug)
      this.$router.push({
        path: '/koszyk'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.product-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);

  .cover {
    width: 350px;
    height: auto;
  }

  .description {
    flex: 1;
    padding: 10px 20px;

    h1 {
      margin-top: 0;

      small {
        display: block;
        margin-bottom: 0.3em;
        font-size: 0.8em;

        .new-price {
          color: #4CAF50;
        }

        .old-price {
          text-decoration: line-through;
          font-size: 0.8em;
        }
      }
    }

  }
}

.addComment {
  display: block;
  width: 48.5%;
  height:230px;
  margin-top: 67px;
  float: right;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  transform: translateY(0);

  h3 {
    padding: 10px;
    padding-bottom: 5px;
    margin: 0;
  }

  .rating {
    float:right;
    padding-top:4px;
    padding-right:10px;
    unicode-bidi: bidi-override;
    font-size: 24px;
    color: gold;
    direction: rtl;
  }

  .rating > span {
    display: inline-block;
    position: relative;
    width: 1.1em;
  }

  .rating > span:hover:before,
  .rating > span:hover ~ span:before {
    content: "\2605";
    position: absolute;
  }

  .inputContainer{
    display: block;
    padding: 10px;
    .nickTxt {
      display:block;
      padding: 5px;
      resize: none;
    }

    .commentTxt{
      display: block;
      width: 100%;
      height: 80px;
      margin-top: 10px;
      padding: 5px;
      resize:none;
    }
  }
  .commentBtn{
    display: block;
    padding-left: 10px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 00px 00px;

  a {
    text-decoration: none;
    color: initial;
  }
}

// .container{
//   display:block;

//   .test{
//     display: block;
//     clear: left;

//     .productPrice{
//       display: block;
//       float: left;
//       h3 {
//         padding-top: 8px;
//         margin-top: 0;

//         small {
//           display: inline-block;
//           margin-bottom: 0.0em;
//           font-size: 2.0em;

//           .new-price {
//             color: #4CAF50;
//           }

//           .old-price {
//             text-decoration: line-through;
//             font-size: 0.8em;
//           }
//         }
//       }
//     }
//     .addProduct{
//       display: block;
//       position: relative;
//       padding-top: 0px;
//       margin-left: 275px;
//       button{
//         margin-top: 8px;
//         line-height: 40px;
//         font-weight: bold;
//         color: $brand-text;
//         background: $brand-background;
//         border: none;
//       }
//       button:hover{
//         margin-top: 8px;
//         line-height: 40px;
//         font-weight: bold;
//         color: $brand-text;
//         background: rgb(255, 0, 0);
//         border: none;
//       }

//     }
//     .productInfo{
//       display: inline-block;
//     }
//   }

// }
</style>
