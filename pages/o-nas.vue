<template>
  <div>
    <div class="container">
      <h1>O nas</h1>
      <div class="row">
        <div class="col">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a consequat ipsum, sit amet efficitur libero. Morbi nec felis ante. Quisque nec diam augue. Donec eu odio non nisl rutrum bibendum. Aenean ornare, eros in bibendum tincidunt, sapien sapien ornare mi, a feugiat libero dui non ante. Nulla fringilla congue purus eget condimentum. Vivamus ut augue sed sem auctor consequat quis quis velit. Aenean tempor tempor nibh, non fringilla enim tempus vitae. Sed suscipit erat ut imperdiet pharetra. Quisque fringilla turpis leo, sed placerat turpis dignissim sed. Sed rhoncus, urna non lacinia hendrerit, nunc ipsum lobortis elit, id pulvinar velit metus ut augue. Quisque faucibus purus vitae condimentum aliquam. Quisque non lobortis dui.</p>
        </div>
        <div class="col">
          <img src="~assets/you-x-ventures-Oalh2MojUuk-unsplash.jpg">
        </div>
      </div>

      <div class="row">
        <div class="col">
          <!-- Photo by Johannes Plenio on Unsplash -->
          <img src="~assets/johannes-plenio-FZpCcPss9to-unsplash.jpg">
        </div>
        <div class="col">
          <p>Phasellus at lacus nec purus porta consectetur in quis neque. Vivamus sollicitudin nisl sit amet tempor varius. Aenean ante lectus, vulputate vitae luctus et, sagittis non enim. Fusce tristique neque sit amet feugiat hendrerit. Duis fringilla tortor ac erat commodo venenatis vel sit amet purus. Nullam vehicula, leo vitae finibus eleifend, erat sem consequat massa, quis finibus nisi felis vel risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eget orci consectetur dui interdum posuere.</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p>Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vitae tellus sed orci vulputate scelerisque. Phasellus mattis suscipit cursus. Cras aliquet pretium dolor, in volutpat dui vehicula sit amet. Sed dapibus justo a diam luctus, sed interdum mi mollis. Proin vel pharetra nisl. Nulla erat ex, pellentesque sit amet enim in, congue sagittis dolor. Aenean tempus sit amet sapien sed bibendum. Mauris egestas fringilla tortor eget tincidunt. Vivamus facilisis neque ut aliquet dapibus. Morbi at sagittis libero. Curabitur bibendum quam sollicitudin, auctor eros consequat, dignissim enim. Pellentesque sapien erat, euismod ut est eget, mattis scelerisque sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cura.</p>
        </div>
        <div class="col">
          <!-- Photo by Kai Pilger on Unsplash -->
          <img src="~assets/kai-pilger-jQSmvesQMsY-unsplash.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  & > .col {
    flex: 1;

    p {
      text-align: justify;
      font-size: 1.1em;
      line-height: 1.5em;
    }

    img {
      max-width: 100%;
      height: auto;
      padding: 20px;
    }
  }
}

h1 {
  font-size: 3rem;
  margin-bottom: 0px;
}
</style>
