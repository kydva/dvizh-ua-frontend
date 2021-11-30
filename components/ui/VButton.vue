<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px rgb(255, 167, 233) solid;
  background: rgb(235, 128, 43);
  background: linear-gradient(
    349deg,
    rgba(235, 128, 43, 1) 0%,
    rgba(235, 40, 129, 1) 100%
  );
  color: white;
  font-weight: bolder;
  cursor: pointer;
}
</style>
