<template>
  <div>
    <h1>Użytkownicy</h1>

    <table>
      <thead>
        <tr>
          <th>Zaznacz</th>
          <th>Blokada Konta</th>
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
          <td><input type="checkbox" class="blokada"></td>
            <td>
              <ul>
                <li><a>{{ u.stanowisko }}</a>
                  <ul>
                    <div class="wybor">
                    <li><a>sprzedawca<input type="checkbox" class="wb"></a></li>
                    <li><a>magazynier<input type="checkbox" class="wb"></a></li>
                    <li><a>marketingowiec<input type="checkbox" class="wb"></a></li>
                    <li><a>administrator<input type="checkbox" class="wb"></a></li>
                    </div>
                  </ul>
                </li>
              </ul>
            </td>
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

.blokada{
  margin-left:24px;
}

ul {
  list-style: none;
}

ul > li {
  left: -35px;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  float: left;
  position: relative;
  height: 30px;
}

ul > li > a {
  padding: 0;
  text-align: right;
  text-decoration: none;
}

.wybor {
  padding: 5px;
  border: 0.4px solid black;
}

.wb {
  float: right;
}

ul > li ul {
  padding: 0;
  position: absolute;
  display: none;
  left: 0;
  top: 30px;
  width: 150px;
  white-space: nowrap;
  background-color: #f3f3f3;
  z-index: 10;
}

ul li:hover > ul {
  display: block;
}

</style>
