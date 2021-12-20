<template>
  <div class="q-pa-md" style="max-width: 550px">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Me</q-item-label>
          <q-item-label caption lines="2">Jani Sillanpää</q-item-label>
          <q-item-label caption lines="2"
            >Fourth year student at Tampere University of Applied
            Sciences</q-item-label
          >
          <q-item-label caption lines="2"
            ><a href="https://github.com/jantero93">My GitHub</a></q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Skills</q-item-label>
          <q-item-label caption>
            <ul>
              <li>{{ 'Web, TypeScript & Javascript, npm' }}</li>
              <li>Node, Express</li>
              <li>Git (more advanced than only pushing to repo)</li>
              <li>Jira, Confluence, Bitbucket integration</li>
            </ul>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>I have done, but not my top skills</q-item-label>
          <q-item-label caption>
            <ul>
              <li>Java, Spring, Android with Java</li>
              <li>C++, one project with Qt widgets</li>
              <li>Very simple CI/CD pipelines on GitHub and Bitbucket</li>
            </ul></q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Work experience</q-item-label>
          <q-item-label caption>
            <ul>
              <li>Health and care related jobs until 2020 autumn</li>
              <li>
                2020 autumn - 2021 spring part of Tampere's health care system
                integration. Mostly Excel related jobs
              </li>
              <li>
                Summer 2021 Combitech, TypeScript + Spring. A lot with
                <a href="https://openlayers.org/">OpenLayers</a> and
                <a href="https://visjs.org/">VisJs Timeline</a>
              </li>
            </ul></q-item-label
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
  name: 'CarouselMisc'
});
</script>

<style>
ul {
  padding-left: 1em;
}
</style>
