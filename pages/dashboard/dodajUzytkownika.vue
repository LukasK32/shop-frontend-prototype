<template>
  <div class="addComment">
    <h2>Dodaj użytkownika</h2>
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
      <div class="input7">
        <label for="haslo">Hasło: </label>
        <input type="text" class="haslo" maxlength="50">
      </div>
    </div>
    <div class="addButton">
      <div class="btn dash">
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

<style lang="scss" scoped>
.addComment {
  margin-top: 90px;
  padding: 20px 30px;
  width: 500px;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);

  h2 {
    margin-top: 0;
  }
}

.addButton{
  margin-top: 14px;
}

</style>
