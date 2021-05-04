import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nlqtmohqoouhewtnhukw.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDA3NDc4MiwiZXhwIjoxOTM1NjUwNzgyfQ.ftnjC3kRSUTzeiL7gMQ9ZuXv-9bAWiXM7PQGq9UUODc";

export const supabase = createClient(supabaseUrl, supabaseKey);

createApp(App).use(store).use(router).mount("#app");
