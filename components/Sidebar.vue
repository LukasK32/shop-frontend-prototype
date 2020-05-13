<template>
  <div class="sidebar">
    <h1 class="logo">
      KoronaPol
    </h1>

    <nav>
      <n-link to="/">
        Zobacz stronę
      </n-link>
      <n-link to="/dashboard/asortyment">
        Asortyment
      </n-link>
      <n-link to="/dashboard/comments">
        Komentarze
      </n-link>
      <n-link to="/dashboard/uzytkownicy">
        Użytkownicy
      </n-link>
      <n-link to="/dashboard/zamowienia">
        Zamówienia
      </n-link>
    </nav>

    <div class="spacer" />

    <footer>&copy; 2020 KoronaPol</footer>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background: #264e42;
  color: $brand-text;

  min-width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    flex: 0;
  }

  & > .spacer {
    flex: 1;
  }

  h1 {
    text-align: center;
  }

  footer {
    text-align: center;
    font-size: 1.2em;
    padding: 0.5em 1em;
  }

  nav a {
    display: block;

    padding: 10px 24px;
    color: inherit;
    text-decoration: none;

    font-size: 1rem;

    &:hover,
    &.nuxt-link-exact-active {
      background: rgba(0,0,0,0.2);
    }
  }

}
</style>
