<template>
  <NLink :to="`/events/${event.id}`" class="event-card">
    <div class="picture">
      <img :src="picture" alt="">
    </div>
    <div class="text-content">
      <div class="title">{{ event.name }}</div>
      <div class="info">
        <div class="date">
          <img width="17" :src="require('~/assets/img/icons/calendar.svg')"/>
          <span>{{ date }}</span>
        </div>
        <div class="location">
          <img width="17" :src="require('~/assets/img/icons/location.svg')">
          <span>{{ event.city.name }}</span>
        </div>
      </div>
      <div class="description">
        {{ event.description }}
      </div>
    </div>
  </NLink>
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
    picture(): string {
      return `/storage/${this.event.picture}`
    },

    date(): string {
      const start = (new Date(this.event.start))

      const end = (new Date(this.event.start))

      return start.getDate() === end.getDate() ?
        `${start.toLocaleDateString('en-GB')}` :
        `${start.toLocaleDateString('en-GB')} - ${end.toLocaleDateString('en-GB')}`
    }
  }
})
</script>

<style lang="scss" scoped>
.event-card {
  color: inherit;
  text-decoration: none;
  padding: 30px 40px;
  background: white;
  border-radius: 6px;
  border: rgba(96, 90, 90, 0.27) 1px solid;
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  column-gap: 40px;
  transition: all 0.4s;

  &:hover {
    box-shadow: rgba(154, 149, 165, 0.15) 0px 8px 24px;
  }

  @include tablet {
    flex-direction: column;
  }
}

.picture {
  height: 200px;
  width: 300px;

  @include tablet {
    width: 100%;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
}

.text-content {
  width: 100%;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

}
</style>
