<template>
  <div>
    <h1>Zamówienia</h1>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Adres</th>
          <th>Email</th>
          <th>Produkt</th>
          <th>Ilość</th>
          <th>Data</th>
          <th>Dostawa</th>
          <th>Stan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(o, key) in orders" :key="key">
          <td>{{ o.id }}</td>
          <td>{{ o.imie }}</td>
          <td>{{ o.nazwisko }}</td>
          <td>{{ o.adres }}</td>
          <td>{{ o.email }}</td>
          <td>{{ o.produkt }}</td>
          <td>{{ o.ilosc }}</td>
          <td>{{ o.data }}</td>
          <td>{{ o.dostawa }}</td>
          <td>
              <ul>
                <li class="szerokoscStanu"><a>{{ o.stan }}</a>
                  <ul>
                    <div class="wybor">
                      <li><a>Koszyk</a><input type="checkbox" class="wb"></li>
                      <li><a>Złożone</a><input type="checkbox" class="wb"></li>
                      <li><a>Opłacone</a><input type="checkbox" class="wb"></li>
                      <li><a>Skompletowane</a><input type="checkbox" class="wb"></li>
                      <li><a>Nadane</a><input type="checkbox" class="wb"></li>
                      <li><a>Zakończone</a><input type="checkbox" class="wb"></li>
                    </div>
                  </ul>
                </li>
              </ul>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    orders () {
      return this.$store.state.orders
    }
  }
}

</script>

<style lang="scss" scoped>

.szerokoscStanu{
  width: 80px;
}

ul {
  list-style: none;
}

ul > li {
  left: -45px;
  margin: 0;
  padding: 0;
  padding-left: 5px;
  float: left;
  position: relative;
  height: 30px;
}

ul > li > a {
  float:left;
  padding: 0;
  text-align: left;
  text-decoration: none;
}

.wybor {
  position:relative;
  left:-80px;
  text-align: left;
  padding: 5px;
  border: 0.4px solid black;
  background-color: #f3f3f3;
  z-index: 10;
}

.wb {
  float: right;
}

ul > li ul {
  padding: 0;
  position: absolute;
  display: none;
  top: 30px;
  width: 200px;
  z-index: 10;
}

ul li:hover > ul {
  display: block;
}

</style>
