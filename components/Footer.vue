<template>
  <footer class="app-footer">
    <div class="container">
      <div class="copyright">
        Copyright &copy; 2020 KoronaPol
      </div>
      <div class="prototype-warning">
        <n-link to="/dashboard/login">
          This is a prototype!
        </n-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: $brand-background;
  color: $brand-text;

  & > .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .prototype-warning a {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.3em;

      color: inherit;
      text-decoration: none;
      cursor:unset;
    }
  }
}
</style>
