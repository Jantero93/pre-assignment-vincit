<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
      height="100%"
    >
      <q-carousel-slide name="client" class="column no-wrap flex-center">
       <CarouselClient />
      </q-carousel-slide>
      <q-carousel-slide name="server" class="column no-wrap flex-center">
       <CarouselServer />
      </q-carousel-slide>
      <q-carousel-slide name="other" class="column no-wrap flex-center">
        <CarouselMisc />
      </q-carousel-slide>

    </q-carousel>

    <div class="row justify-center" style="padding-top: 3em">
      <q-btn-toggle v-model="slide" 
        glossy
        :options="[
          { label: 'client', value: 'client' },
          { label: 'server', value: 'server' },
          { label: 'misc', value: 'other' },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

/** Components */
import CarouselClient from './aboutCarouselItems/CarouselClient.vue'
import CarouselMisc from './aboutCarouselItems/CarouselMisc.vue'
import CarouselServer from './aboutCarouselItems/CarouselServer.vue'

export default defineComponent({
  name: 'About',
  components: {
    CarouselClient,
    CarouselMisc,
    CarouselServer
  },
   setup () {
    return {
      slide: ref('client'),
    }
  }
});
</script>

<style >
</style>
