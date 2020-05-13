<template>
  <div>
    <h1>
      <small>Produkt</small>
      {{ product.name }}
    </h1>
    <p>...</p>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    product () {
      const slug = this.$route.params.slug
      const { products } = this.$store.state

      if (slug in products) {
        return products[slug]
      }

      return null
    }
  }
}
</script>

<style lang="scss" scoped>
h1 small {
  display: block;
  font-size: 0.5em;
}
</style>
