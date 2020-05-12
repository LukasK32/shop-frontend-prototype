<template>
  <div class="sidenav">
    <h1 class="logo">
      KoronaPol
    </h1>
    <nav class="container">
      <n-link to="/">
        Sklep
      </n-link>
      <n-link to="/">
        Asortyment
      </n-link>
      <n-link to="/">
        Użytkownicy
      </n-link>
      <n-link to="/">
        Zamówienia
      </n-link>
      <n-link to="/">
        Dostawa
      </n-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.sidenav {
  background: #264e42;
  color: $brand-text;

  width: 200px;
  left: 0;
  overflow-x: hidden;

  .logo {
    margin-left:24px;
  }

  nav {
    display: flex;
    flex-direction: column;
    left:0;

    padding: 0 00px;

    a {
      display:inline-block;
      width: 200px;
      clear: left;
      padding: 10px 24px;
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
</style>
