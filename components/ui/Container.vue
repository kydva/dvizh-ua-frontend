<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  padding: 20px 20px 50px 20px;
  border-radius: 0 16px 16px 0;

  @include laptop {
    max-width: 1020px;
  }

  @include tablet {
    width: auto;
    max-width: 600px;
  }

}
</style>
