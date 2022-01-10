<template>
  <div class="events">
    <div class="filter-panel">
      <form class="search-form">
        <FormInput v-model="query.search" class="search" type="search" placeholder="Введіть пошуковий запит"/>
        <VButton class="search-button">Щукати</VButton>
      </form>

      <VSelect v-model="query.city">
        <option value="">-- Місто проведення --</option>
        <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
      </VSelect>

      <DatePicker v-model="eventTimeRange" placeholder="Час проведення події" class="date-filter" range format="DD-MM-YYYY"/>
    </div>
    <div v-if="total === 0" class="no-results">
      Нічого не знайдено(
    </div>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <VButton
      v-if="page < totalPages"
      class="load-more-button"
      @click.native="loadMore"
    >
      Загрузити ще
    </VButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import {EventCard} from "~/components/pages/events";

import {IEvents, EventsGateway} from "~/database/events";

import FormInput from "~/components/ui/FormInput.vue";

import VButton from "~/components/ui/VButton.vue";

import {ICities} from "~/database/cities";

import {store} from "~/store";

import VSelect from "~/components/ui/VSelect.vue";


export default Vue.extend({
  components: {VSelect, VButton, FormInput, EventCard},

  data: () => ({
    events: [] as IEvents.Event[],
    total: 0,
    page: 1,
    query: {
      take: 2,
      skip: 0,
      category: null,
      search: null,
      city: null,
      start: null as Date | null,
      end: null as Date | null,
    } as IEvents.ListEventsQuery
  }),

  async fetch() {
    this.query.category = Number(this.$route.query.category) || null;

    await this.fetchEvents()
  },

  computed: {
    totalPages(): number {
      const total = this.total / this.query.take

      return Math.ceil(total)
    },

    filterKey(): any[] {
      return [this.query.category, this.query.search, this.query.city, this.query.start, this.query.end]
    },

    cities(): ICities.City[] {
      return store.state.cities.cities
    },

    eventTimeRange: {
      get(): Date[] {
        return [this.query.start, this.query.end]
      },
      set([start, end]: Date[]): void {
        this.query.start = start;

        this.query.end = end;
      }
    },
  },

  watch: {
    $route() {
      this.query.category = Number(this.$route.query.category) || null;
    },

    filterKey() {
      this.page = 1;

      this.query.skip = 0;

      this.fetchEvents()
    },

    async page(num) {
      if (num === 1) {
        return
      }

      this.query.skip += this.query.take

      const {events} = await EventsGateway.getEvents(this.query);

      this.events.push(...events)
    }
  },

  methods: {
    async fetchEvents() {
      const {events, total} = await EventsGateway.getEvents(this.query);

      this.events = events;

      this.total = total;
    },

    loadMore() {
      this.page += 1
    },
  }
})
</script>

<style lang="scss" scoped>
.filter-panel {
  display: flex;
  column-gap: 40px;
  margin-bottom: 80px;
  justify-content: center;

  @include tablet {
    flex-direction: column;
  }
}

.search-form {
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;

  .search-button {
    height: 49px;
  }
}

.date-filter {
  align-self: stretch;
  display: flex;
  align-items: center;
}

.load-more-button {
  display: block;
  margin: 0 auto;
}

.no-results {
  text-align: center;
}

</style>
