import * as components from "./index";
import "./index.css";

const ComponentLibrary = {
  install(Vue) {
    for (const i in components) {
      const component = components[i];

      Vue.component(component.name, component);
    }
  },
};

export default ComponentLibrary;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibrary);
}

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
