<template>
  <div class="addComment">
    <h2>Dodaj produkt</h2>
    <div class="inputContainer">
      <div class="input1">
        <label for="nazwa">Nazwa produktu: </label>
        <input type="text" class="nazwa" maxlength="50">
      </div>
      <div class="input2">
        <label for="cena">Cena: </label>
        <input type="text" class="cena" maxlength="50">
      </div>
      <div class="input3">
        <label for="cenap">Cena Promocyjna: </label>
        <input type="text" class="cenap" maxlength="50">
      </div>
      <div class="input4">
        <label for="promocja"><input type="checkbox" class="promocja"> Promocja</label>
      </div>
      <div class="input5">
        <label for="opis">Opis: </label>
        <textarea rows="5" />
      </div>
      <div class="input6">
        <label for="btn dash dodaj">Zdjęcie:

          <div class="btn dash dodaj">
            Dodaj Zdjęcie
          </div>
        </label>
      </div>
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
  computed: {
    users () {
      return this.$store.state.users
    }
  }
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
