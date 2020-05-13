<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main">
      <nuxt class="container" />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  background: #f3f3f3;

  & > * {
    flex: 0;
  }

  .main {
    flex: 1;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid black;
      padding: 8px;
      text-align: center;

      a {
        // text-decoration: none;
        color: inherit;
      }
    }

    thead tr {
      background: #264e42;
      color: white;
    }

    tr:nth-child(even) {
      background: white;
    }
  }

}

.container {
  display: block;
  width: 100%;
  max-width: 1000px;

  padding: 15px 20px;
  margin: 0 auto;
}
</style>
