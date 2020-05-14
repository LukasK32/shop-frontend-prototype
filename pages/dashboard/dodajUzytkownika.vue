<template>
  <div class="addComment">
    <h3>Dodaj Użytkownika</h3>
    <div class="inputContainer">
      <div class="input1">
        <label for="stanowisko">Stanowisko: </label>
        <input type="text" class="stanowisko" maxlength="50">
      </div>
      <div class="input2">
        <label for="imie">Imie: </label>
        <input type="text" class="imie" maxlength="50">
      </div>
      <div class="input3">
        <label for="nazwisko">Nazwisko: </label>
        <input type="text" class="nazwisko" maxlength="50">
      </div>
      <div class="input4">
        <label for="data">Data Urodzenia: </label>
        <input type="text" class="data" maxlength="50">
      </div>
      <div class="input5">
        <label for="email">Email: </label>
        <input type="text" class="email" maxlength="50">
      </div>
      <div class="input6">
        <label for="telefon">Numer Telefonu: </label>
        <input type="text" class="telefon" maxlength="50">
      </div>
    </div>
    <div class="addButton">
      <div class="btn branded dash">
        Dodaj
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
  height:340px;
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

.stanowisko{
  margin-left:40px;
  width:340px;
}

.input2{
  display: block;
  padding: 5px;
}

.imie{
  margin-left:91px;
  width:340px;
}

.input3{
  display: block;
  padding: 5px;
}

.nazwisko{
  margin-left:54px;
  width:340px;
}

.input4{
  display: block;
  padding: 5px;
}

.data{
  margin-left:9px;
  width:340px;
}

.input5{
  display: block;
  padding: 5px;
}

.email{
  margin-left:82px;
  width:340px;
}

.input6{
  display: block;
  padding: 5px;
}

.telefon{
  margin-left:2px;
  width:340px;
}

.addButton{
  margin-top: 10px;
}

</style>
