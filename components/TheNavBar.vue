<template>
  <div class="navbar">
    <NuxtLink to="/" class="logo">
      <img height="40px" src="~/assets/img/logo.png">
    </NuxtLink>
    <ul class="nav-items">
      <li>
        <NuxtLink to="#">
          Усі події
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Концерти
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Майстер-класи
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Семінари
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Вечірки
        </NuxtLink>
      </li>
    </ul>
    <ul class="nav-items">
      <li>
        <NuxtLink to="#">
          Увійти
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Реєстрація
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  margin: 0;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    191deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(203, 41, 112, 1) 73%,
    rgba(235, 131, 40, 1) 100%
  );
}

.logo {
  margin: 1rem;
  display: inline-block;
}

.nav-items {
  list-style-type: none;

  li {
    float: left;

    a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      color: white;
      font-family: 'Arial', sans-serif;
      padding: 1rem;
    }
  }
}
</style>
