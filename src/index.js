import Vue from "vue";
import App from "./app.vue";

import "bulma";

// new Vue({ render: (createElement) => createElement(App) }).$mount("#app");
new Vue({
  el: "#app",
  render: (h) => h(App),
});
