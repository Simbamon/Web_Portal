// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";
import router from "/src/router";
import FullCalendar from "vue-full-calendar";
import VueFire from "vuefire";
import datePicker from "vue-bootstrap-datetimepicker";

import "fullcalendar-scheduler";
import "fullcalendar/dist/fullcalendar.min.css";
import "fullcalendar-scheduler/dist/scheduler.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(FullCalendar);
Vue.use(VueFire);
Vue.use(datePicker);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
