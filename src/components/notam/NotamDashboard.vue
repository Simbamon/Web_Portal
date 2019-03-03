<template>
  <div>
    
    <!--HEADER-->
    <h1><span class="badge badge-dark">
    <i class="fas fa-chalkboard"></i> DASHBOARD
    </span></h1>
    <hr>
    <!--HEADER-->

    <!--Contents-->
    <div class = "row">
    <div class="col-sm-7 py-2">
      <div class="card  h-100">
        <div class="card-header text-white bg-primary d-flex justify-content-between">
        <h4><i class="fas fa-calendar"></i> NOTAM CALENDAR</h4>
          <router-link to="/notam/calendar">
            <button type="button" class="btn btn-outline-light btn-sm">
              <i class="fas fa-edit"></i> Edit
            </button>
          </router-link>
        </div>
        <div class="card-body text-dark">
          <full-calendar :config="config" :events="events" style="width: 100%;" />  
        </div>
      </div>
    </div>

    <div class="col-sm-5 py-2">
      <div class="card">
        <div class="card-header text-white bg-warning d-flex justify-content-between">
        <h4><i class="fas fa-clipboard-list"></i> ROUTE LIST</h4>
          <router-link to="/notam/dayview">
            <button type="button" class="btn btn-outline-light btn-sm">
              <i class="fas fa-stopwatch"></i> Day View
            </button>
          </router-link>
        </div>
        <div class="card-body text-dark">
          <full-calendar :config="routeconfig" :events="routesevent" style="width: 100%;" /> 
        </div>
      </div>
    </div>

    </div>

    

    <!--Contents-->
  
  
 
  


  </div>
</template>

<script>
import moment from "moment";
import db from "@/components/firebaseInit";
import $ from "jquery";

$('.calendar').css('font-size','5px !important');

export default {
  name: "example",
  data() {
    return {
      events: [],
      routesevent: [],
      config: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        defaultView: "listDay",
        header: {
          left: false, 
          center: "prev, title ,next",
          right: false,
        },
        footer: {
          right: "today",
        },
        titleFormat: "YY.MM.DD",
        displayEventTime: false,
        contentHeight: 350,
      },
      routeconfig: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        defaultView: "listDay",
        header: {
          left: false, 
          center: "prev, title ,next",
          right: false,
        },
        footer: {
          right: "today",
        },
        titleFormat: "YY.MM.DD",
        contentHeight: 350,
      },
    };
  },
  created () {
    this.getFullCalEvents()
    this.getRoutes()
  },
  methods: {
    getFullCalEvents() {
      db.collection('calevent').get().then(querySnapshot =>{
        const events = []
        querySnapshot.forEach(doc => {
          const data = {
            title: "◎ " + doc.data().atsac + "\u00A0:\u00A0" + moment(doc.data().startdate).format("HHmm") + 
            "-" + moment(doc.data().enddate).format("HHmm") + "\u00A0\u00A0\u00A0" +
            " <" + doc.data().hosted + ">",
            start:doc.data().startdate,
            end: doc.data().enddate,
            allDay: false,
            }
          events.push(data)
        })
        this.events = events
      })
    },
    getRoutes() {
      db.collection('calevent').get().then(querySnapshot =>{
        const routesevent = []
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().route,
            start:doc.data().startdate,
            end: doc.data().enddate,
            allDay: false,
            }
          routesevent.push(data)
        })
        this.routesevent = routesevent
      })
    },
  }
};


</script>

