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
            <select style="width: auto;">
              <option v-for="stan in ['Złożone', 'Opłacone', 'Skompletowane', 'Nadane', 'Zakończone']" :key="`${key}-${stan}`" :selected="stan == o.stan">
                {{ stan }}
              </option>
            </select>
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
