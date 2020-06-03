<template>
  <div class="addComment">
    <h2>Dodaj użytkownika</h2>
    <div class="inputContainer">
      <label for="stanowisko">Stanowisko: </label>
      <select>
        <option>Sprzedawca</option>
        <option>Magazynier</option>
        <option>Marketer</option>
        <option>Administrator</option>
      </select>

      <label for="imie">Imie: </label>
      <input type="text" class="imie" maxlength="50">

      <label for="nazwisko">Nazwisko: </label>
      <input type="text" class="nazwisko" maxlength="50">

      <label for="data">Data Urodzenia: </label>
      <input type="date" class="data" maxlength="50">

      <label for="email">Email: </label>
      <input type="email" class="email" maxlength="50">

      <label for="telefon">Numer Telefonu: </label>
      <input type="tel" class="telefon" maxlength="50">

      <label for="haslo">Hasło: </label>
      <input type="password" class="haslo" maxlength="50">
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
