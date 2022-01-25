<template>
  <div>
    <Breadcrumbs :event="event"/>
    <div class="event">
      <div class="image">
        <img :src="picture"/>
      </div>
      <div class="content">
        <h1 class="title">{{event.name}}</h1>
        <div class="info">
          <div class="date">
            <img width="17" :src="require('~/assets/img/icons/calendar.svg')"/>
            <span>{{ date }}</span>
          </div>
          <div class="location">
            <img width="17" :src="require('~/assets/img/icons/location.svg')">
            <span>{{ event.city.name }}, {{event.location}}</span>
          </div>
          <div v-if="event.price" class="price">
            <img width="17" :src="require('~/assets/img/icons/price.svg')">
            <span>{{ event.price }}</span>
          </div>
        </div>
        <div class="description">
          {{event.description}}
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

import {EventsGateway, IEvents} from "~/database/events";

import Breadcrumbs from "~/components/pages/events/Breadcrumbs.vue";

export default Vue.extend({
  components: {Breadcrumbs},
  async asyncData({params}) {
    return {event: await EventsGateway.getEvent(params.id)}
  },

  data: () => ({
    event: {} as IEvents.Event
  }),

  computed: {
    picture(): string {
      return `http://localhost:3000/storage/${this.event.picture}`
    },

    date(): string {
      const start = new Date(this.event.start)

      const end = new Date(this.event.end)

      const startDate = start.toLocaleDateString('en-GB')

      const endDate = end.toLocaleDateString('en-GB')

      const startTime = start.toLocaleTimeString('en-GB').slice(0, 5)

      const endTime = end.toLocaleTimeString('en-GB').slice(0, 5)

      if (startDate === endDate ) {
        return `${startDate}: ${startTime} - ${endTime}`
      }

      return `${startDate} ( ${startTime} ) - ${endDate} ( ${endTime} )`
    }
  }
})
</script>

<style lang="scss" scoped>
.event {
  display: flex;
  column-gap: 100px;

  @include laptop {
    column-gap: 20px;
  }

  @include tablet {
    flex-direction: column;
  }
}

.image {
  width: 450px;
  height: 340px;

  @include tablet {
    width: 100%;
  }

  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 40px;
}

.date {
  flex-basis: 100%;
}

.description {
  max-width: 600px;
}
</style>
