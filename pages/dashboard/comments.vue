<template>
  <div>
    <h1>Komentarze</h1>

    <table>
      <thead>
        <tr>
          <th />
          <th>Ukryty</th>
          <th>Produkt ref.</th>
          <th>Autor</th>
          <th>Data</th>
          <th>Ocena</th>
          <th>Treść</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, key) in comments" :key="key">
          <td>
            <n-link :to="`/dashboard/comments`">
              Usuń
            </n-link>
          </td>
          <td style="text-align: center;">
            <input type="checkbox" class="blokada" :checked="key == 2">
          </td>
          <td>
            <n-link :to="`/dashboard/asortyment/${c.ref}`">
              {{ c.ref }}
            </n-link>
          </td>
          <td>{{ c.nick }}</td>
          <td> {{ c.date }} </td>
          <td>
            <div class="rating">
              {{ c.rating }}
            </div>
          </td>
          <td>{{ c.content }}</td>
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
td:nth-child(2),
td:nth-child(6) {
  text-align: left;
}

td:nth-child(1),
td:nth-child(3),
td:nth-child(4) {
  white-space: nowrap;
}

.rating {
    float:right;
    margin: 0;
    padding-top:3px;
    padding-right:10px;
    unicode-bidi: bidi-override;
    font-size: 24px;
    color: gold;
    text-align: center;
    white-space: nowrap;
  }
</style>
