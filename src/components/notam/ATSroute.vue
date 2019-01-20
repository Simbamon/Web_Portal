<template>
  <div>
    <!--HEADER-->
    <h1><span class="badge badge-dark">
    <i class="fas fa-edit"> Flight Code</i>
    </span></h1>
    <hr>
    <!--HEADER-->
    <div class = "d-flex">

     <!--NOTAM CODE CARD-->
     
      <div class="card" style="width: 350px;"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0RYPvPwrOUy-zPrH7U1tue251FwB2mwnmwdT3i7pkQd7GrPa" alt="Notam Code">
        <div class="card-body">
          <h5 class="card-title">Type your NOTAM CODE here</h5>
          <form @submit.prevent="saveATSRoute()">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="fas fa-hashtag fa-fw"></i>
            </span>
            </div>
            <input type="text" v-model="addATSData.atsid"  class="form-control" placeholder="ID #" required />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button type="button" class="btn btn-secondary" data-toggle="modal" @click="showModal">
              <i class="fas fa-object-group"></i>
              </button>
            </div>
              <b-form-select v-model="addATSData.atsgrp" :options="atsgroups" />
         </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="fas fa-traffic-light fa-fw"></i>
            </span>
            </div>
            <input type="text" v-model="addATSData.atsac" class="form-control" placeholder="ATS Airspace Classification" required />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="fas fa-route fa-fw"></i>
            </span>
            </div>
            <input type="text" v-model="addATSData.route"  class="form-control" placeholder="Custom flight route" required />
          </div>
          
              <div class="float-right">
              <button type="submit" class="btn btn-space btn-danger">
                <i class="fas fa-clipboard-check"> ADD</i>
              </button>
              </div>
          </form>
        </div>

    </div>
    <!--NOTAM CODE CARD-->

    <!--MODAL-->
    <b-modal ref="addGroup" size="lg" hide-footer centered title="GROUP">
      <div class="modal-body" style="height:320px;">
          <div class = "d-flex">
             <form @submit.prevent="saveATSGroup()"> 
              <div class="card" style="width: 300px;">
                
                <div class="card-body">
                  <h5 class="card-title">Add Group Name</h5>
                 <div class="input-group mb-3">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="fas fa-object-group fa-fw"></i>
                  </span>
                  </div>
                  <input type="text" v-model="addGroupData.group_name" class="form-control" placeholder="Group Name"/>
                </div> 


                  <div class="float-right">
                  <button type="submit" class="btn btn-space btn-primary">
                    <i class="fas fa-clipboard-check"> ADD</i>
                  </button>
                  </div>
                </div>
              </div>
             </form>
                <div style="width: 420px; margin-left: 20px;"> 
                <li class="navbar bg-primary text-white">
                  <h3>Group List</h3>
                </li> 
                <ul class="list-group" style="max-height: 230px; overflow:auto;">
                  <li class="list-group-item" v-for="atsgroup in atsgroups" v-bind:key="atsgroup.id">◎ {{atsgroup.value}}
                  <div class = "float-right">
                  <button @click="deleteATSGroup(atsgroup.value)" class="btn btn-space btn-danger btn-sm">
                    <i class="fas fa-trash-alt"></i>
                  </button> 
                  </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="float-right" style="margin-top:10px; margin-right:16px">
            <button type="button" class="btn btn-secondary" @click="hideModal">
                <i class="fas fa-door-open"></i> Close
            </button>
          </div>
    </b-modal>
    <!--MODAL-->


    <!--TABLE-->
    <div id= "custom-ats-list" style="margin-left: 40px; width: 600px">
    <li class="navbar bg-primary text-white">
      <h2>Custom ATS List</h2>
    </li>
    <ul class="list-group">
      <div v-for = "atsroute in atsroutes" v-bind:key = "atsroute.id">
      <!--EDIT-->
      <div v-if="editID === atsroute.atsid">
      <div class="card">
      <div class="card-body">
      <li class="list-group-item">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="fas fa-hashtag fa-fw"></i>
            </span>
            </div>
            <input type="text" v-model="atsroute.atsid"  class="form-control" style="display:inline-block" placeholder="ID #" disabled />
          </div>
         <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="fas fa-object-group fa-fw"></i>
              </span>
            </div>
              <b-form-select v-model="editATSData.atsgrp" :options="atsgroups"/>
         </div> 
          
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="fas fa-traffic-light fa-fw"></i>
            </span>
            </div>
            <input type="text" v-model="editATSData.atsac" class="form-control" style="display:inline-block" placeholder="ATS Airspace Classification" required />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="fas fa-route fa-fw"></i>
            </span>
            </div>
            <input type="text" v-model="editATSData.route"  class="form-control" style="display:inline-block" placeholder="Custom flight route" required />  
            </div>         
        </li>
            <div class="float-right" style="padding-top: 20px">
              <button @click="submidEditATSROUTE()" class="btn btn-space btn-primary">
                <i class="fas fa-check fa-fw"></i>
              </button> 
              <button @click="cancelEditATSROUTE" class="btn btn-space btn-danger">
                <i class="fas fa-times fa-fw"></i>
              </button>
            </div>
      </div>
      </div>
        

        </div>
        
      <!--EDIT-->
      
      <!--LIST-->
      <div v-else>
      <li class="list-group-item">
      
      <h4><span class="badge badge-secondary" style="display:inline-block; width:100px; margin-left: 20px">{{atsroute.atsac}}</span></h4>

      <input type="text" v-model= "atsroute.route" 
      style = "background-color:transparent;border: transparent; margin-left: 20px;" readonly/>

      <div class = "float-right">
      <button @click="editATSROUTE(atsroute)" class="btn btn-space btn-primary btn-sm">
        <i class="fas fa-pen"></i>
      </button>

      <button @click="deleteATSRoute(atsroute.atsid)" class="btn btn-space btn-danger btn-sm">
        <i class="fas fa-trash-alt"></i>
      </button>
      </div>
      
      </li>
      </div>
      <!--LIST-->
      </div>

    </ul>
    <ul>
      
      
    </ul>
    </div>
    <!--TABLE-->
    
              
    </div>
  </div>
</template>

<script>
import db from "@/components/firebaseInit";


export default {
  name: "ATSroute",
  data () {
    return {
      addATSData :{
        atsid: '',
        atsgrp: '',
        atsac: '',
        route: '',
      },
      addGroupData: {
        group_name: '',
      },
      value: '',
      text: '',
      atsid: '',
      atsgrp: '',
      atsac: '',
      route: '',
      selected: '',
      atsroutes: [],
      atsgroups: [],
      editID: '',
      editATSData :{
        atsid: '',
        atsgrp: '',
        atsac: '',
        route: '',
      },
    }
  },
  created () {
    this.getATSRoute()
    this.getATSGroup()
  },

  methods: {
    getATSRoute() {
      db.collection('atsroute').get().then(querySnapshot => {
      const atsroutes = []
      querySnapshot.forEach(doc => {
        atsroutes.push(doc.data())
        })
        this.atsroutes = atsroutes
      })
    },
    getATSGroup() {
      db.collection('atsgroup').get().then(querySnapshot =>{
        const atsgroups = []
        querySnapshot.forEach(doc => {
          const data = {
            value: doc.data().group_name,
            text:doc.data().group_name
            }
          atsgroups.push(data)
        })
        this.atsgroups = atsgroups
      })
    },
    saveATSGroup() {
      db.collection('atsgroup')
      .add(this.addGroupData)
      .then(this.getATSGroup)
    },
    saveATSRoute() {
      db.collection("atsroute")
      .add(this.addATSData)
      .then(this.getATSRoute)
      
    },
    deleteATSRoute(atsid) {
      db.collection("atsroute")
      .where('atsid', '==', atsid).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc =>{
          doc.ref.delete().then(this.getATSRoute)
        })
      })
    },
    deleteATSGroup(group_name) {
      db.collection('atsgroup')
      .where('group_name', '==', group_name).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete().then(this.getATSGroup)
        })
      })
    },
    editATSROUTE(atsroute) {
      this.editID = atsroute.atsid
      this.editATSData.atsgrp = atsroute.atsgrp
      this.editATSData.atsac = atsroute.atsac
      this.editATSData.route = atsroute.route
    },
    cancelEditATSROUTE() {
      this.editID = ''
      this.editATSData.atsgrp = ''
      this.editATSData.atsac = ''
      this.editATSData.route = ''
    },
    submidEditATSROUTE() {
      db.collection("atsroute")
      .where('atsid', '==', this.editID).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc =>{
          doc.ref.set({
            atsid: this.editID,
            atsgrp: this.editATSData.atsgrp,
            atsac: this.editATSData.atsac,
            route: this.editATSData.route,
          }).then(this.getATSRoute)
        })
        this.cancelEditATSROUTE()
      })
    },
    showModal () {
      this.$refs.addGroup.show()
    },
    hideModal () {
      this.$refs.addGroup.hide()
    }

  }
};

</script>

<style scoped>

.input-group-prepend {
  width : 15%;
}

.input-group-prepend span {
  width: 100%;
  overflow: hidden;
}

.input-group-prepend button {
  width: 100%;
  overflow: hidden;
}

.list-group h4{
  display: inline;
}

.btn-space {
    margin-right: 2.5px;
    margin-left: 2.5px;

}

.list-group{
  max-height: 500px;
  margin-bottom: 10px;
  overflow:auto;

}

</style>