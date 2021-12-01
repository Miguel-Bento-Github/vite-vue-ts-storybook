<script setup lang="ts">
import BasicButton from "@/stories/BasicButton.vue";
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <h2>Docs</h2>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a>
    |
    <a
      href="https://storybook.js.org/docs/vue/get-started/introduction"
      target="_blank"
    >
      Storybook
    </a>
    |
    <a href="https://www.typescriptlang.org/docs/" target="_blank">
      Typescript
    </a>
    |
    <a href="https://eslint.org/docs/user-guide/" target="_blank"> ESLint </a>
    |
    <a href="https://prettier.io/docs/en/index.html" target="_blank">
      Prettier
    </a>
  </p>

  <h3>Check reactivity</h3>

  <basic-button
    size="small"
    type="button"
    @click="count++"
    :label="count ? `Count is: ${count}` : 'Click me!'"
  >
  </basic-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
@use "@/styles/functions/color" as *;

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
