<template>
  <form class="sign-in" @submit.prevent="login">
    <div v-if="error" class="error">Неправильний логін чи пароль</div>

    <label for="name">Логін</label>
    <FormInput
      id="name"
      v-model="credentials.name"
      placeholder="Введіть ваш логін" />

    <label for="password">Пароль</label>
    <FormInput
      id="password"
      v-model="credentials.password"
      placeholder="Введіть ваш пароль"
      type="password" />

    <VButton @click.native="login">Увійти</VButton>
    <div class="register-link">
      Ще не зареєстровані? <NLink to="/sign-up">Зареєструйтесь!</NLink>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import { store } from '@/store';

import FormInput from '~/components/ui/FormInput.vue';

import VButton from '~/components/ui/VButton.vue';

export default Vue.extend({
  components: { FormInput, VButton },

  data: () => ({
    credentials: {
      name: '',
      password: '',
    },
    error: false,
  }),

  methods: {
    async login() {
      try {
        this.error = false;

        await store.dispatch.auth.login(this.credentials);

        this.$router.back()
      } catch (e) {
        this.error = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.sign-in {
  margin: 10vh auto;
  max-width: 60%;

  @include mobile {
    max-width: 90%;
  }
}

.register-link {
  padding-top: 10px;
  color: gray;
}

.error {
  color: rgb(182, 56, 56);
  margin-bottom: 10px;
}
</style>
