<template>
  <div class="comment">
    <div class="commentInfo">
      <p class="rating">
        {{ productReview.rating }}
      </p>
      <p class="date">
        {{ productReview.date }}
      </p>
    </div>
    <h3>{{ productReview.nick }}</h3>
    <p class="review">
      {{ productReview.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    productReview: {
      type: Object,
      default: () => ({
        product: 'aaa',
        content: '...',
        date: '1 lutego 1999',
        rating: '★ ★ ★ ★ ★',
        nick: 'user'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  display: block;
  width: 48.5%;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  transform: translateY(0);

  h3 {
    //float: left;
    padding: 10px;
    margin: 0;
  }

  .date{
    float:right;
    font-size: 14px;
    font-style: italic;
    padding-right: 10px;
  }
  .rating {
    float:right;
    margin: 0;
    padding-top:3px;
    padding-right:10px;
    unicode-bidi: bidi-override;
    font-size: 24px;
    color: gold;
  }

  .review {
    padding: 10px;
  }
}
</style>
