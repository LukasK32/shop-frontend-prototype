<template>
  <header>
    <div class="container main-header">
      <h1>
        KoronaPol
        <small>Prototyp sklepu z maseczkami i testami na COVID-19</small>
      </h1>
      <div class="buttons">
        <img src="~assets/en.png">
        <span class="theme-dark" />
        <span class="theme-color-blind">D</span>
      </div>
    </div>
    <nav class="container">
      <n-link to="/">
        Strona główna
      </n-link>
      <n-link to="/asortyment">
        Asortyment
      </n-link>
      <n-link to="/kontakt">
        Kontakt
      </n-link>
      <n-link to="/o-nas">
        O nas
      </n-link>
      <n-link to="/koszyk">
        Koszyk
      </n-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $brand-background;
  color: $brand-text;

  small {
    display: block;
    font-size: 0.6em;
  }

  h1 {
    margin-bottom: 0.2em;
  }

  nav {
    display: flex;
    flex-direction: row;

    padding: 0 15px;

    a {
      display: inline-block;
      padding: 10px 15px;
      color: inherit;
      text-decoration: none;

      font-size: 1rem;

      &:hover {
        background: rgba(0,0,0,0.25);
      }

      &.nuxt-link-exact-active {
        background: rgba(0,0,0,0.15);
      }
    }
  }
}

.main-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .buttons {
    font-size: 1.3em;

    img {
      height: 1em;
      width: auto;
    }
  }

  .theme-dark {
    display: inline-block;
    background: black;

    width: 1em;
    height: 1em;
  }
}
</style>
