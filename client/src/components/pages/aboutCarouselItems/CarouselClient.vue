<template>
  <div class="q-pa-md" style="max-width: 550px">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Client</q-item-label>
          <q-item-label caption>Vue 3 + TypeScript</q-item-label>
          <q-item-label caption
            >Usually my 'go to' is React + TS. I have had used Vue 2 + TS on
            work last summer and I wanted to practice it some
            more.</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>UI</q-item-label>
          <q-item-label caption
            ><a href="https://quasar.dev/">Quasar Framework</a> <br />Totally
            new framework for me, I had to learn it for this very project.
            Usually I use e.g Bootstrap but there is no support for Vue 3
            yet.</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Architecture</q-item-label>
          <q-item-label caption
            >Nothing super fancy; utilities, services are separated folders.
            Grouped similar UI components in individual folders</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Misc, trying new stuff</q-item-label>
          <q-item-label caption
            >There is some things I have wanted to try out. Client and server
            have some tests, these tests are not very well done or follow good
            practices. I also did generic api call function with fetch and
            wrapped it in local npm-package. Normally I would use probably
            Axios.</q-item-label
          >
        </q-item-section>
        <q-separator spaced inset />
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CarouselClient'
});
</script>

<style scoped></style>
