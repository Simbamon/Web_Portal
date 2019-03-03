<template>
  <div>
    <!--HEADER-->
    <div class="d-flex justify-content-between">
    <h1 class=""><span class="badge badge-dark">
      <i class="fas fa-stopwatch"></i> DAY VIEW
      </span></h1>
    <div>
    <router-link to="/notam">
      <button type="button" class="btn btn-primary" style="height: 60%; margin-top: 13px; margin-left: 5px;">
        <i class="fas fa-undo-alt"></i> GO BACK
      </button>
    </router-link>
    </div>
    </div>
    <hr>
    <!--HEADER-->
      <full-calendar :config="config" :events="dayviewevent" style="width: 100%;"/>
  </div> 
</template>

<script>
import moment from "moment";
import db from "@/components/firebaseInit";
import $ from "jquery";

export default {
  name: "dayview",
  data () {
    return {
      dayviewevent: [],
      config: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        defaultView: "timelineDay",
        header: {
          left: false,
          center: "prev, title, next",
          right: "today"
        },
        contentHeight: 500,
      }
    }
  },
  created () {
    this.getDayViewList()
  },
  methods: {
    getDayViewList() {
      db.collection('calevent').get().then(querySnapshot => {
      const dayviewevent = []
      querySnapshot.forEach(doc => {
        const data = {
            title: moment(doc.data().startdate).format("HH:mm") + " - " + 
                  moment(doc.data().enddate).format("HH:mm") + "\n[" + doc.data().route + "]",
            start:doc.data().startdate,
            end: doc.data().enddate,
            allDay: false,
            }
          dayviewevent.push(data)
        })
        this.dayviewevent = dayviewevent
      })
    },
  }  
}
</script>
