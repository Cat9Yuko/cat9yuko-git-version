import { createApp } from "vue";
import App from "./App.vue";
import Card from "./components/Card.vue";

const app = createApp(App);

app.component("card", Card);
app.mount("#app");
