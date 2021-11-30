<template>
  <div class="layout">
    <TheNavBar />
    <Container class="container">
      <transition mode="out-in" name="fade">
        <Nuxt />
      </transition>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheNavBar from '@/components/layouts/TheNavBar.vue';

import Container from '~/components/ui/Container.vue';

export default Vue.extend({
  components: { TheNavBar, Container },
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
}
</style>
