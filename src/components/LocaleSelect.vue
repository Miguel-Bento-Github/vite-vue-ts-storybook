<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { t, availableLocales, locale } = useI18n<string[]>();

watch(locale, (newLocale) => {
  if (newLocale) localStorage.locale = newLocale;
});
</script>

<template>
  <div class="locales">
    <select v-model="locale">
      <option value="" selected disabled hidden>
        {{ t("select-locale") }}
      </option>
      <option
        :value="locale"
        class="locale"
        v-for="locale in availableLocales"
        :key="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style scoped>
/* reset */
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1rem 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: inherit;
}

.locales {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  border: 1px solid currentColor;
  border-radius: 2rem;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
}

.locales::after {
  position: absolute;
  content: "";
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: 0.8em;
  height: 0.5em;
  background-color: currentColor;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}
</style>
