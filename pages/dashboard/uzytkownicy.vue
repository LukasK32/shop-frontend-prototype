<template>
  <div>
    <h1>Użytkownicy</h1>

    <table>
      <thead>
        <tr>
          <th>Zaznacz</th>
          <th>Stanowisko</th>
          <th>Imie</th>
          <th>Nazwisko</th>
          <th>Data Urodzenia</th>
          <th>Adres Email</th>
          <th>Numer Telefonu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(u, key) in users" :key="key">
          <td><input type="checkbox"></td>
          <td>{{ u.stanowisko }}</td>
          <td>{{ u.imie }}</td>
          <td>{{ u.nazwisko }}</td>
          <td>{{ u.dataUrodzenia }}</td>
          <td>{{ u.email }}</td>
          <td>{{ u.nrTelefonu }}</td>
        </tr>
      </tbody>
    </table>
    <div class="buttons">
      <a class="btn dash" @click="addUser">Dodaj Użytkownika</a>
      <div class="btn dash">
        Usuń
      </div>
      <div class="btn dash">
        Modyfikuj
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
  },

  methods: {
    addUser () {
      this.$router.push({
        path: '/dashboard/dodajUzytkownika'
      })
    }
  }

}
</script>

<style lang="scss" scoped>
td:nth-child(2),
td:nth-child(5) {
  text-align: left;
}

td:nth-child(1),
td:nth-child(2),
td:nth-child(3) {
  white-space: nowrap;
}

.buttons{
  padding-top: 10px;
}

</style>
