import { createApp } from "vue";
import App from "./App.vue";
import Plugin from "test-plugin";

const app = createApp(App);
app.use(Plugin);
app.mount("#app");
