<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  padding: 20px;

  @include laptop {
    width: 800px;
  }

  @include tablet {
    width: 600px;
  }

  @include mobile {
    width: auto;
    max-width: 400px;
  }
}
</style>
