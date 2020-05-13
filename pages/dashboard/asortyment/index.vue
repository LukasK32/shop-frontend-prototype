<template>
  <div>
    <h1>Asortyment</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nazwa</th>
          <th>Cena</th>
          <th>Promocja</th>
          <th>Wyróżniony</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, key) in products" :key="key">
          <td>{{ p.ref }}</td>
          <td>
            <n-link :to="`/dashboard/asortyment/${key}`">
              {{ p.name }}
            </n-link>
          </td>
          <td>{{ p.price }}</td>
          <td>{{ p.discountedPrice ? p.discountedPrice : '-' }}</td>
          <td>{{ p.featured ? 'Tak' : 'Nie' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
  text-align: left;
}
</style>
