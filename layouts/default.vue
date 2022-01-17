<template>
  <div class="layout">
    <TheNavBar/>
    <Container class="container">
      <Nuxt/>
    </Container>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheNavBar from '@/components/layouts/TheNavBar.vue';

import TheFooter from '@/components/layouts/TheFooter.vue'

import Container from '~/components/ui/Container.vue';

export default Vue.extend({
  components: {TheNavBar, Container, TheFooter},
});
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  flex-grow: 1;
  min-height: 100vh;
}
</style>
