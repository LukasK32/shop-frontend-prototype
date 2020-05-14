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
        </tr>
      </tbody>
    </table>
    <div class="buttons">
      <a class="btn branded dash" @click="addUser">Dodaj Produkt</a>
      <div class="btn branded dash">
        Usuń
      </div>
      <div class="btn branded dash">
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
