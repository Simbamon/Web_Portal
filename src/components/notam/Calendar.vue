<template>
  <div>
    <!--HEADER-->
    <div class="d-flex justify-content-between">
    <h1 class=""><span class="badge badge-dark">
      <i class="fas fa-calendar"></i> CALENDAR
      </span></h1>
    <div>
    <b-btn @click="showModal" variant="primary" data-toggle="modal" style="height: 60%; margin-top: 13px ">
      <i class="fas fa-plus"></i> ADD EVENT
    </b-btn>
    <router-link to="/notam/calendar/table">
          <button type="button" class="btn btn-warning" style="height: 60%; margin-top: 13px; margin-left: 5px;">
            <i class="fas fa-table"></i> EVENT TABLE
          </button>
    </router-link>  
    </div>
    </div>
    <hr>
    <!--HEADER-->
    
    <!--MODAL-->
    <div>  
      <b-modal ref="addEvent" size="lg" hide-footer centered title="ADD Event">
      <form @submit.prevent="addCalEvent">
          <div class="modal-body">
            <div class="card text-center">
              <div class="card-header bg-primary text-white">
                NOTAM
              </div>
              <div class="card-body" style="margin-left: 5%; margin-right: 5%">
                  <div class="input-group mb-3 ">
                    <div class="input-group-prepend">
                      <span class="input-group-text" >
                        <i class="fas fa-hashtag fa-fw"></i>
                      </span>
                    </div>
                    <input type="text" v-model="addEvents.idnum" class="form-control" placeholder="ID #" aria-label="ID #" aria-describedby="basic-addon1" required />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" >
                        <i class="fas fa-traffic-light fa-fw"></i>
                      </span>
                    </div>
                    <input type="text" v-model="addEvents.atsac" class="form-control" placeholder="ATSAC" aria-label="ATSAC" aria-describedby="basic-addon1" required />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" >
                        <i class="fas fa-route fa-fw"></i>
                      </span>
                    </div>
                    <input type="text" v-model="addEvents.route" class="form-control" placeholder="Route" aria-label="Route" aria-describedby="basic-addon1" required />
                  </div>
                  <div class="row" style="margin: 0">
                        <div class="form-group" style="width: 49%">
                              <div class="input-group ">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" >
                                    <i class="far fa-clock fa-fw"></i>
                                  </span>
                                </div>
                                <date-picker placeholder="Start Time" name="startDate" v-model="addEvents.startdate" :config="options" required></date-picker>
                              </div>
                        </div> 
                        <div class="form-group " style="width: 49%; margin-left: 2%">  
                            <div class="input-group ">
                              <div class="input-group-prepend">
                                <span class="input-group-text" >
                                  <i class="fas fa-clock fa-fw"></i>
                                </span>
                              </div>
                              <date-picker  placeholder="End Time" name="endDate" v-model="addEvents.enddate" :config="options" required></date-picker>
                            </div>
                        </div>
                  </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" >
                      <i class="fas fa-plane fa-fw"></i>
                    </span>
                  </div>
                  <input type="text" v-model="addEvents.hosted" class="form-control" placeholder="Hosted By" aria-label="Hosted By" aria-describedby="basic-addon1" required />
                    </div>              
                </div>
              </div>
                
            </div>
            <div class="float-right" style="margin-top:10px; margin-right:16px">
              <button type="submit" class="btn btn-space btn-primary" style="margin-right:5px">
                  <i class="fas fa-check"></i> Submit
              </button> 
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hideModal">
                  <i class="fas fa-door-open"></i> Close
              </button>
            </div>
          </form> 
      </b-modal>
    </div>
    <!--MODAL-->

    <!--CALENDAR-->
    <div class="calContentsMargin">
      <full-calendar :config="config" :events="events" style="width: 100%;" />
    </div>
    <!--CALENDAR-->
  </div>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import jQuery from 'jquery';
import db from "@/components/firebaseInit";

jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'fas fa-eraser',
      close: 'far fa-times-circle'
    }
  });

export default {
  name: "calendar",
  data() {
    return {
      addEvents: {
        idnum: '',
        atsac: '',
        route: '',
        startdate: '',
        enddate:'',
        hosted:'',
      },
      idnum: '',
      atsac: '',
      route: '',
      startdate: '',
      enddate:'',
      hosted:'',
      calevents: [],
      startDate: null,
      endDate: null,
      options: {
      format: 'MM/DD/YYYY HH:mm',
      useCurrent: false,
      showClear: true,
      } ,
      events: [],

      config: {
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        defaultView: "month",
        header: {
          left: "prev,next,  today",
          center: "title",
          right: "month,timelineDay,listDay,week"
        },
        contentHeight: 650,
        eventLimit: 3,
      }
    };
  },
  components: {
      datePicker
  },
  created () {
    this.getCalEvents()
    this.getFullCalEvents()
  },
  methods: {
    getCalEvents() {
      db.collection('calevent').get().then(querySnapshot => {
      const calevents = []
      querySnapshot.forEach(doc => {
        calevents.push(doc.data())
        })
        this.calevents = calevents
      })
    },
    getFullCalEvents() {
      db.collection('calevent').get().then(querySnapshot =>{
        const events = []
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().atsac + " : <" + doc.data().hosted + " >", 
            start:doc.data().startdate,
            end: doc.data().enddate,
            allDay: false,
            }
          events.push(data)
        })
        this.events = events
      })
    },
    addCalEvent: function(event) {
      db.collection('calevent')
      .add(this.addEvents)
      .then(alert("Succesfully Added"))
      .then(this.getFullCalEvents)

      this.addEvents.idnum = this.idnum
      this.addEvents.atsac = this.atsac 
      this.addEvents.route = this.route
      this.addEvents.startdate = this.startdate
      this.addEvents.enddate = this.enddate
      this.addEvents.hosted = this.hosted

      this.idnum = this.atsac = this.route = this.startdate = this.enddate = this.hosted = ''
      event.target.reset();
    },
    showModal () {
      this.$refs.addEvent.show()
    },
    hideModal () {
      this.$refs.addEvent.hide()
    }
  }


};
</script>

<style scope>
.calContentsMargin {
  min-width: 70%;
  margin: 30px auto;
}


</style>
