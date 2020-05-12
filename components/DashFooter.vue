<template>
  <footer class="app-footer">
    <div class="container">
      <div class="copyright">
        Copyright &copy; 2020 KoronaPol
      </div>
      <div class="prototype-warning">
        This is a prototype!
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #264e42;
  color: $brand-text;

  & > .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .prototype-warning {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.3em;
    }
  }
}
</style>
