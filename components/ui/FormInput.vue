<template>
  <component class="input" :is="tag" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: '',
    },
  },

  computed: {
    tag(): 'input' | 'textarea' {
      return this.$attrs.type === 'textarea' ? 'textarea' : 'input'
    }
  }
});
</script>

<style lang="scss" scoped>
.input {
  resize: none;
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 15px 12px;
  border: 1px #ffbf94 solid;
  border-radius: 5px;
  outline: none;

  &:focus {
    border: 1px #b67fff solid;
  }

  &::placeholder {
    color: #cacaca;
  }
}
</style>
