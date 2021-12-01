<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";

const { t } = useI18n();
</script>

<template>
  <a class="logo-link" href="https://vitejs.dev/">
    <img class="logo" alt="Vite logo" src="./assets/svg/vite.svg" />
  </a>
  <a class="logo-link" href="https://v3.vuejs.org/">
    <img class="logo" alt="Vue 3 logo" src="./assets/svg/vue.svg" />
  </a>
  <a class="logo-link" href="https://storybook.js.org/">
    <img class="logo" alt="Storybook logo" src="./assets/svg/storybook.svg" />
  </a>
  <a class="logo-link" href="https://www.typescriptlang.org/">
    <img class="logo" alt="TS logo" src="./assets/svg/ts.svg" />
  </a>
  <a class="logo-link" href="https://eslint.org//">
    <img class="logo" alt="E.S. Lint logo" src="./assets/svg/eslint.svg" />
  </a>
  <a class="logo-link" href="https://prettier.io/">
    <img class="logo" alt="Prettier logo" src="./assets/svg/prettier.svg" />
  </a>
  <HelloWorld :msg="t('welcome')" />
</template>

<style lang="scss">
body {
  background-color: $light;
  color: $dark;

  @media (prefers-color-scheme: dark) {
    background-color: $dark;
    color: $light;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

<style lang="scss" scoped>
.logo {
  height: 56px;
  width: 56px;
}

.logo-link {
  background: darken($light, 35%);
  border-radius: 50%;
  padding: 8px;

  @media (prefers-color-scheme: dark) {
    background: darken($dark, 5%);
  }

  & + .logo-link {
    margin-left: 16px;
  }
}
</style>
