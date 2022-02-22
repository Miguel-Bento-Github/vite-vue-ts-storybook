import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages,
});

createApp(App).use(i18n).mount("#app");
