<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { availableLocales, locale } = useI18n<string[]>();

watch(locale, (newLocale) => {
  if (newLocale) localStorage.locale = newLocale;
});
</script>

<template>
  <select v-model="locale" class="locales">
    <option
      :value="locale"
      class="locale"
      v-for="locale in availableLocales"
      :key="locale"
    >
      {{ locale }}
    </option>
  </select>
</template>

<style scoped>
.locales {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
