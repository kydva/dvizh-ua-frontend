<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: auto;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  padding: 20px;

  @include laptop {
    max-width: 1020px;
  }

  @include tablet {
    max-width: 600px;
  }

}
</style>
