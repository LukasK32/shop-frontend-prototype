<template>
  <div>
    <h1>Użytkownicy</h1>

    <table>
      <thead>
        <tr>
          <th />
          <th>Blokada</th>
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
          <td>
            <n-link :to="`/dashboard/dodajUzytkownika`">
              Edytuj
            </n-link>
          </td>
          <td><input type="checkbox" class="blokada" :checked="key == 2" @change="blockUser(`${u.imie} ${u.nazwisko}`)"></td>
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
      <n-link :to="`/dashboard/dodajUzytkownika`" class="btn dash">
        Dodaj Użytkownika
      </n-link>
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
    blockUser (name) {
      confirm(`Czy na pewno chcesz zmienić stan blokady dla użytkownika ${name}?`)
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

.blokada{
  margin-left:24px;
}
</style>
