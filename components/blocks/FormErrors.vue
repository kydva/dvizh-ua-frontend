<template>
  <ul class="errors">
    <li v-for="error in errors" :key="error" class="error">{{ error }}</li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    errors: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.errors {
  padding-left: 15px;
}

.error {
  color: rgb(170, 68, 68);
  animation: fadeIn 0.8s;
}
</style>
