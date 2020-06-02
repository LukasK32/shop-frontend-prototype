<template>
  <div>
    <h1>Asortyment</h1>
    <table>
      <thead>
        <tr>
          <th>Zaznacz</th>
          <th>Ref</th>
          <th>Nazwa</th>
          <th>Cena</th>
          <th>Promocja</th>
          <th>Wyróżniony</th>
          <th>Ilość w Magazynie</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, key) in products" :key="key">
          <td><input type="checkbox"></td>
          <td>{{ p.ref }}</td>
          <td>
            <n-link :to="`/dashboard/asortyment/${p.ref}`">
              {{ p.name }}
            </n-link>
          </td>
          <td>{{ p.price }}</td>
          <td>{{ p.discountedPrice ? p.discountedPrice : '-' }}</td>
          <td>{{ p.featured ? 'Tak' : 'Nie' }}</td>
          <td>{{ p.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <div class="buttons">
      <a class="btn dash" @click="addUser">Dodaj Produkt</a>
      <a class="btn dash" @click="externalOrder">Zamów w hurtowni</a>
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
    products () {
      return this.$store.state.products
    }
  },

  methods: {
    addUser () {
      this.$router.push({
        path: '/dashboard/dodajProdukt'
      })
    },
    externalOrder () {
      window.location.replace('https://hurtowniachemiczna.com/chemia-profesjonalna/higiena-rak/plyny-do-dezynfekcji-rak')
    }
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
  text-align: left;
}

.buttons{
  padding-top: 10px;
}
</style>
