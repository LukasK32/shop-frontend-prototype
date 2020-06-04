<template>
  <div>
    <h1>Asortyment</h1>
    <table>
      <thead>
        <tr>
          <th colspan="3" />
          <th>Produkt ref.</th>
          <th>Nazwa</th>
          <th>Cena</th>
          <th>Promocja</th>
          <th>Wyróżniony</th>
          <th>Ilość w Magazynie</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, key) in products" :key="key">
          <td>
            <n-link :to="`/dashboard/dodajProdukt`">
              Edytuj
            </n-link>
          </td>
          <td>
            <a href="#" @click="deleteProduct(p.name)">
              Usuń
            </a>
          </td>
          <td>
            <a href="https://hurtowniachemiczna.com/chemia-profesjonalna/higiena-rak/plyny-do-dezynfekcji-rak" target="_blank">
              Hurtownia
            </a>
          </td>
          <td>
            <n-link :to="`/dashboard/asortyment/${p.ref}`">
              {{ p.ref }}
            </n-link>
          </td>
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
    },
    deleteProduct (name) {
      confirm(`Czy na pewno chcesz usunąć produkt ${name}?`)
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
