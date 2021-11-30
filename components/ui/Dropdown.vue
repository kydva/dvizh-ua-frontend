<template>
  <div class="dropdown">
    <slot name="dropdown"></slot>
    <div class="content">
      <slot class="dropdown-content" name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;

  &:hover {
    display: block;

    .content {
      display: block;
    }
  }
}

.content {
  text-align: left;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  -webkit-animation: fadeIn 0.4s;
  animation: fadeIn 0.4s;

  a {
    color: rgb(94, 51, 100) !important;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
