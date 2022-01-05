<template>
  <form class="send-event" @submit.prevent="send">
    <FormErrors :errors="errors"/>

    <label>Час проведення події
      <DatePicker v-model="eventTimeRange" class="date" range type="datetime" format="DD-MM-YYYY, HH:mm"/>
    </label>

    <label for="name">Назва події</label>
    <FormInput
      id="name"
      v-model="event.name"/>

    <label for="category">Категорія</label>
    <VSelect id="category" v-model="event.category">
      <option value="">-- Оберіть категорію --</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
    </VSelect>

    <label for="city">Місто проведення</label>
    <VSelect id="city" v-model="event.city">
      <option value="">-- Оберіть місто --</option>
      <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
    </VSelect>

    <label for="location">Місце проведення</label>
    <FormInput
      id="location"
      v-model="event.location"/>

    <label for="picture">Зображення</label>
    <FormInput
      id="picture"
      type="file"
      @change.native="onImgSelect"/>

    <label for="price">Вартість події</label>
    <FormInput
      id="price"
      v-model="event.price"
      placeholder="Наприклад: 1000 грн, 600-800 грн. Залиште пустим, якщо відвідування безкоштовне"/>

    <label for="price">Опис події</label>
    <FormInput
      id="description"
      v-model="event.description"
      type="textarea"
      rows="9"/>

    <VButton>Надіслати</VButton>
    <img v-show="loading" class="spinner" src="~/assets/img/spinner.gif"/>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import {store} from '@/store';

import FormInput from '~/components/ui/FormInput.vue';

import VButton from '~/components/ui/VButton.vue';

import VSelect from '@/components/ui/VSelect.vue';

import FormErrors from '~/components/blocks/FormErrors.vue';

import {IEvents} from "~/database/events/events.types";

import {ICategories} from "~/database/categories";

import {ICities} from "~/database/cities";

import {EventsGateway} from "~/database/events";

export default Vue.extend({
  components: {FormInput, VButton, FormErrors, VSelect},

  middleware({store, redirect}) {
    if (!store.state.auth.user) {
      redirect('/sign-in')
    }
  },

  data: () => ({
    event: {
      start: {} as Date,
      end: {} as Date
    } as IEvents.PostEventForm,
    errors: [] as string[],
    loading: false
  }),

  computed: {
    eventTimeRange: {
      get(): Date[] {
        return [this.event.start, this.event.end]
      },
      set([start, end]: Date[]): void {
        this.event.start = start;

        this.event.end = end;
      }
    },

    categories(): ICategories.Category[] {
      return store.state.categories.categories
    },

    cities(): ICities.City[] {
      return store.state.cities.cities
    }
  },

  methods: {
    onImgSelect(event: Event) {
      const target = event.target as HTMLInputElement;

      if (target.files) {
        this.event.picture = target.files?.[0];
      }
    },
    async send() {
      try {
        this.loading = true

        this.errors = []

        const event = await EventsGateway.sendEvent(this.event)

        this.$router.push(`/events/${event.id}`)
      } catch (e) {
        this.errors = e.response?.status === 400 ? e.response.data.message : ['Undefined error']

        console.log(e)

        this.loading = false
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.send-event {
  margin: 10vh auto;
  max-width: 60%;

  @include mobile {
    max-width: 90%;
  }
}

.date {
  width: 100%;
  margin: 10px 0;
}

.dates {
  display: flex;
}

.spinner {
  position: relative;
  top: 10px;
  width: 30px;
  height: 30px;
}
</style>
