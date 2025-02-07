import "./assets/main.css";
// 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例
import { createApp } from "vue";
// 从一个单文件组件中导入根组件
import App from "./App.vue";

import HelloWorld from "./components/HelloWorld.vue";

// 创建应用实例
const app = createApp(App);

// 引入全局组件
app.component("HelloWorld", HelloWorld);

app.config.errorHandler = (err, vm, info) => {
  console.log(err);
  console.log(vm);
  console.log(info);
  // handle error
};

// 挂载应用
app.mount("#app");
