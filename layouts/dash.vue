<template>
  <div class="dash">
    <div class="sideNuxt">
      <SideNav />
      <div class="nuxt">
        <nuxt />
      </div>
    </div>
    <DashFooter />
  </div>
</template>

<script>
import DashFooter from '~/components/DashFooter'
import SideNav from '~/components/SideNav'

export default {
  components: {
    DashFooter,
    SideNav
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.dash {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: #f3f3f3;

  & > * {
    flex: 1;
  }

  & > footer {
    flex: 0;
  }
}

.sideNuxt {
  display: flex;
  flex-direction: row;
}

.container {
  display: block;
  width: 100%;
  max-width: 1000px;

  padding: 15px 20px;
  margin: 0 auto;
}

.nuxt {
  padding:10px;
}

</style>
