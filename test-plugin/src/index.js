// import * as Components from "./components";
import Footer from "./Footer.vue";

//Vue plugin.
const Plugin = {
  install(app, options) {
    // for (let name in Components) {
    //   app.component(name, Components[name]);
    // }
    app.component("Footer", Footer);
  },
};

export default Plugin;
