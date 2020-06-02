<template>
  <div>
    <!-- <h1>
      <small>Produkt</small>
      {{ product.name }}
    </h1>
    <p>...</p> -->
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    product () {
      const ref = this.$route.params.ref
      const { products } = this.$store.state

      for (const slug in products) {
        if (products[slug].ref === ref) {
          return {
            slug,
            ...products[slug]
          }
        }
      }

      return null
    }
  },
  mounted () {
    this.$router.push({
      path: `/produkt/${this.product.slug}`
    })
  }
}
</script>

<style lang="scss" scoped>
h1 small {
  display: block;
  font-size: 0.5em;
}
</style>
