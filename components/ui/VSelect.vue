<template>
  <select class="v-select" @input="$emit('input', $event.target.value)">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" sc3oped>
.v-select {
  display: block;
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  margin: 10px 0;
  padding: 15px 12px;
  border: 1px #ffbf94 solid;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
}
</style>
