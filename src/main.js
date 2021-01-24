import { createApp } from 'vue'
import { ElInput, ElButton } from "element-plus";
import App from './App.vue'

const app = createApp(App);
app.use(ElInput).use(ElButton);
app.mount("#app");
