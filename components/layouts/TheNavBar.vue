<template>
  <div class="navbar">
    <NuxtLink to="/" class="logo">
      <img height="55px" src="~/assets/img/logo.png" />
    </NuxtLink>
    <ul class="nav-items">
      <li>
        <NuxtLink to="/events"> Усі події </NuxtLink>
      </li>
      <li v-for="category in categories" :key="category.id">
        <NuxtLink :to="`/events?category=${category.id}`"> {{category.name}} </NuxtLink>
      </li>
    </ul>
    <ul class="nav-items">
      <li class="send-event">
        <NuxtLink to="/events/send"> Надіслати подію </NuxtLink>
      </li>
      <template v-if="!user">
        <li>
          <NuxtLink to="/sign-in"> Увійти </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sign-up"> Реєстрація </NuxtLink>
        </li>
      </template>
      <template v-else>
        <li>
          <Dropdown>
            <template #dropdown>
              <NLink to="/me">Привіт, {{ user.name }}!</NLink>
            </template>
            <template #content>
              <NLink to="/me">Мій профіль</NLink>
              <NLink to="#" @click.native="logout">Вийти</NLink>
            </template>
          </Dropdown>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { IAuth } from '~/database/auth';

import { store } from '~/store';

import Dropdown from '@/components/ui/Dropdown.vue';

import {ICategories} from "~/database/categories";

export default Vue.extend({
  components: { Dropdown },
  computed: {
    user: (): IAuth.User | null => store.state.auth.user,
    categories: (): ICategories.Category[] => store.state.categories.categories,
  },
  methods: {
    logout() {
      store.dispatch.auth.logout();

      this.$router.push('/');
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  margin: 0;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    191deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(203, 41, 112, 1) 73%,
    rgba(235, 131, 40, 1) 100%
  );
}

.logo {
  margin: 1rem;
  display: inline-block;
}

.nav-items {
  list-style-type: none;

  li {
    float: left;

    a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      color: white;
      font-family: 'Arial', sans-serif;
      padding: 1rem;
    }
  }
}

.send-event {
  border-right: rgba(202, 202, 202, 0.23) 1px solid;
}
</style>
