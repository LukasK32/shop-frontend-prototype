<template>
  <div class="addComment">
    <h2>Dodaj produkt</h2>
    <div class="inputContainer">
      <label for="nazwa">Nazwa produktu:</label>
      <input type="text" class="nazwa" maxlength="50">

      <label for="cena">Cena:</label>
      <input type="number" class="cenap" min="0">

      <label for="cenap"><input v-model="promocja" type="checkbox"> Cena promocyjna:</label>
      <input type="number" class="cenap" min="0" :disabled="!promocja">

      <label for="cena">Ilość:</label>
      <input type="number" class="cenap" min="0">

      <label for="opis">Opis: </label>
      <textarea rows="5" />

      <label for="btn dash dodaj">Zdjęcie:
        <div class="btn dash dodaj">
          Dodaj Zdjęcie
        </div>
      </label>
    </div>

    <div class="addButton">
      <div class="btn dash">
        Zatwierdź
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data: () => ({
    promocja: false
  })
}
</script>

<style lang="css" scoped>
.addComment {
  margin-top: 90px;
  padding: 20px 30px;
  width: 500px;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  transform: translateY(0);
}

.addButton{
  margin-top: 14px;
}

.btn.dash.dodaj {
  display: inline-block;
  padding: 0.3em 1em;
  /* margin-left: 77px; */
}
</style>
