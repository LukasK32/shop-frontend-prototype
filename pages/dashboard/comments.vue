<template>
  <div>
    <h1>Komentarze</h1>

    <table>
      <thead>
        <tr>
          <th>Autor</th>
          <th>Data</th>
          <th>Ocena</th>
          <th>Treść</th>
          <th>Akcja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, key) in comments" :key="key">
          <td>{{ c.nick }}</td>
          <td>{{ c.date }}</td>
          <td><img :src="c.rating"></td>
          <td>{{ c.content }}</td>
          <td>TODO</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    comments () {
      return this.$store.state.comments
    }
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(1),
td:nth-child(4) {
  text-align: left;
}

td:nth-child(1),
td:nth-child(2) {
  white-space: nowrap;
}
</style>
