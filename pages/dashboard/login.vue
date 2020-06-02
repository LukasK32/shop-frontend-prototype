<template>
  <div class="login-container">
    <div class="card">
      <h1>Logowanie</h1>
      <label for="uname"><b>Nazwa użytkownika</b></label>
      <input v-model="username" type="text" placeholder="Nazwa użytkownika" required>

      <label for="psw"><b>Hasło</b></label>
      <input v-model="password" type="password" placeholder="Hasło" required>

      <p v-if="err" style="text-align: right; color: red">
        Nazwa użytkownika lub hasło niepoprawne!
      </p>

      <div style="text-align: right">
        <div class="btn dash" @click="login">
          Zaloguj się
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data: () => ({
    username: 'andrzej@koronapol.pl',
    password: 'zaq1@WSX',
    err: false
  }),
  methods: {
    login () {
      if (this.username !== 'andrzej@koronapol.pl' || this.password !== 'zaq1@WSX') {
        this.err = true
        return
      }

      this.$router.push({
        path: '/dashboard'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background: #264e42;

  padding: 20px;

  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  overflow: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .card {
    width: 500px;
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.15);

    padding: 20px;

    h1 {
      margin-top: 0;
    }

    label,
    input {
      display: block;
      font-size: 1.15em;
      margin: 0.5em 0;
    }

    input {
      width: 100%;
      padding: .25em .5em;
    }
  }
}
</style>
