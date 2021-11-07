<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.97);
  padding: 20px;

  @include laptop {
    max-width: 800px;
  }

  @include tablet {
    max-width: 600px;
  }

  @include mobile {
    max-width: 400px;
  }
}
</style>
