<template>
  <form @submit.prevent="register" class="sign-up">
    <FormErrors :errors="errors" />

    <label for="name">Логін</label>
    <FormInput
      id="name"
      v-model="user.name"
      placeholder="Введіть бажаний логін" />

    <label for="password">Пароль</label>
    <FormInput
      id="password"
      v-model="user.password"
      placeholder="Введіть бажаний пароль"
      type="password" />

    <label for="password-confirm">Підтвердження паролю</label>
    <FormInput
      id="password-confirm"
      v-model="user.passwordConfirmation"
      placeholder="Підтвердіть пароль"
      type="password" />

    <VButton >Увійти</VButton>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import { store } from '@/store';

import FormInput from '~/components/ui/FormInput.vue';

import VButton from '~/components/ui/VButton.vue';

import FormErrors from '~/components/blocks/FormErrors.vue';

export default Vue.extend({
  components: { FormInput, VButton, FormErrors },

  data: () => ({
    user: {
      name: '',
      password: '',
      passwordConfirmation: '',
    },
    errors: [] as string[],
  }),

  methods: {
    async register() {
      try {
        this.errors = [];

        await store.dispatch.auth.register(this.user);

        this.$router.push('/');
      } catch (e) {
        this.errors = e.response.data.message;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.sign-up {
  margin: 10vh auto;
  max-width: 60%;

  @include mobile {
    max-width: 90%;
  }
}
</style>
