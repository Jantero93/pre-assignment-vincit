<template>
  <div class="q-pa-" style="max-width: 550px">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Server</q-item-label>
          <q-item-label caption lines="2"
            >Node + Express + TypeScript</q-item-label
          >
          <q-item-label caption lines="2"
            >This is my the most used stack in backend. To be honest it's not my
            favorite one and I have been practicing some with Spring and I'm
            very interested about C# .NET
          </q-item-label>
          <q-item-label style="padding-top: 1em">Why this stack</q-item-label>
          <q-item-label caption lines="2"
            >Reason is chose this stack was that, I knew quite wll how to deploy
            it to Heroku. Otherwise I would have chosen Spring JPA Hibernate ORM
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Architecture</q-item-label>
          <q-item-label caption
            >Separated functionality to controllers and services. Controllers
            handle request, response data validation and services hold business
            logic</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Express serves static frontend</q-item-label>
          <q-item-label caption
            >As in production Express serves client from ../client/dist. In dev
            mode both can be ran individually, client has proxy settings for
            default: http://localhost:8000/</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CarouselServer'
});
</script>

<style scoped>
</style>
