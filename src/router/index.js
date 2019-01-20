import Vue from "vue";
import Router from "vue-router";
import Calendar from "@/components/notam/Calendar";
import Home from "@/components/Home";
import NotamDashboard from "@/components/notam/NotamDashboard";
import CalEventTable from "@/components/notam/CalEventTable"
import DayView from "@/components/notam/DayView";
import ATSroute from "@/components/notam/ATSroute";
import Dashboard from "@/components/emp/Dashboard";
import NewEmployee from "@/components/emp/NewEmployee";
import ViewEmployee from "@/components/emp/ViewEmployee";
import EditEmployee from "@/components/emp/EditEmployee";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/notam/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/notam/calendar/table",
      name: "CalEventTable",
      component: CalEventTable
    },
    {
      path: "/notam/dayview",
      name: "DayView",
      component: DayView
    },
    {
      path: "/notam/ats",
      name: "ATSroute",
      component: ATSroute
    },
    {
      path: "/notam/",
      component: NotamDashboard
    },

    {
      path: "/emp/",
      name: "emp-dashboard",
      component: Dashboard
    },
    {
      path: "/emp/new",
      name: "new-employee",
      component: NewEmployee
    },
    {
      path: "/emp/edit/:employee_id?",
      name: "edit-employee",
      component: EditEmployee
    },
    {
      path: "/emp/:employee_id",
      name: "view-employee",
      component: ViewEmployee
    }
  ]
});
