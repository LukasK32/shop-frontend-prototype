<template>
  <div class="comment">
    <img :src="productReview.rating">
    <p class="date">
      {{ productReview.date }}
    </p>
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
        rating: 'https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/96250264_663439484203833_2593554183948861440_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=bpC_FuXPOeEAX_mT8nB&_nc_ht=scontent.fwaw3-2.fna&oh=e5a4226db9b6ee34bba5034c9aea10cd&oe=5EDB90E5',
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
    padding: 10px;
    margin: 0;
  }
  .date{
    float:right;
    font-size: 14px;
    font-style: italic;
  }
  img{
    padding: 10px;
    width: 120px;
    float: right;
  }
  .review {
    padding: 10px;
  }
}
</style>
