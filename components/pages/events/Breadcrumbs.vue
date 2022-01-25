<template>
  <div class="breadcrumbs">
    <div v-for="item in breadcrumbs" :key="item.name" class="item">
      <NLink :to="item.link">{{ item.name }}</NLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'

import {IEvents} from "~/database/events";

export default Vue.extend({
  props: {
    event: {
      type: Object as PropType<IEvents.Event>,
      required: true
    }
  },

  computed: {
    breadcrumbs(): { name: string, link: string }[] {
      return [
        {name: 'Усі події', link: '/events'},
        {name: this.event.category.name, link: `/events?categoryId=${this.event.category.id}`}
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  column-gap: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.28);
  padding-bottom: 15px;
}

.item {
  position: relative;

  &:not(:last-child):after {
    content: url("~assets/img/icons/arrow.svg");
    position: absolute;
    transform: scale(0.6);
    right: -35px;
    top: -3px;
  }
}

a {
  text-decoration: none;
  color: #3c3c46;
}
</style>
