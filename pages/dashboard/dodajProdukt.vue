<template>
  <div class="addComment">
    <h3>Dodaj Produkt</h3>
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
        <label for="promocja">Promocja: </label>
        <input type="checkbox" class="promocja">
      </div>
      <div class="input5">
        <label for="opis">Opis: </label>
        <input type="text" class="opis" maxlength="50">
      </div>
      <div class="input6">
        <label for="btn dash dodaj">Zdjęcie: </label>
        <div class="btn dash dodaj">
          Dodaj Zdjęcie
        </div>
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
  display: block;
  height:360px;
  margin-top: 92px;
  padding: 10px;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  transform: translateY(0);
}

.input1{
  display: block;
  padding: 5px;
}

.nazwa{
  margin-left:8px;
  width:340px;
}

.input2{
  display: block;
  padding: 5px;
}

.cena{
  margin-left:92px;
  width:340px;
}

.input3{
  display: block;
  padding: 5px;
}

.cenap{
  margin-left:2px;
  width:340px;
}

.input4{
  display: block;
  padding: 5px;
}

.promocja{
  margin-left:60px;
}

.input5{
  display: block;
  padding: 5px;
}

.opis{
  margin-left:95px;
  width:340px;
}

.input6{
  display: block;
  padding: 5px;
}

.addButton{
  margin-top: 14px;
}

.btn.dash.dodaj {
  display: inline-block;
  padding: 0.2em 1.5em;
  margin-left: 77px;
}

</style>
