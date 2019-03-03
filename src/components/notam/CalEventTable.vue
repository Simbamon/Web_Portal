<template>
  <div>
    <!-- HEADER -->
    <div class="d-flex justify-content-between">
      <h1 class="">
        <span class="badge badge-dark">
          <i class="fas fa-table"></i> NOTAM TABLE
        </span>
      </h1>
      <div>
        <router-link to="/notam/calendar">
          <button
            type="button"
            class="btn btn-primary"
            style="height: 60%; margin-top: 13px; margin-left: 5px;"
          >
            <i class="fas fa-undo-alt"></i> GO BACK
          </button>
        </router-link>
      </div>
    </div>
    <hr />
    <!-- HEADER -->


    <!--Table-->
        <table
          ref="calevnttableTable"
          class="table table-striped table-bordered"
          style="width:100%"
        >
          <thead class="bg-dark text-white">
            <tr>
              <th><i class="fas fa-hashtag"></i> ID #</th>
              <th><i class="fas fa-traffic-light"></i> ATSAC</th>
              <th><i class="fas fa-route">e</i> Rout</th>
              <th text><i class="far fa-clock"></i> Start Date</th>
              <th><i class="fas fa-clock"></i> End Date</th>
              <th><i class="fas fa-paper-plane"></i> Hosted By</th>
              <th><i class="fas fa-trash-alt"></i> Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="calevnt in calevnttable" :key="calevnt.id">
              <td>{{ calevnt.idnum }}</td>
              <td>{{ calevnt.atsac }}</td>
              <td>{{ calevnt.route }}</td>
              <td>{{ calevnt.startdate }}</td>
              <td>{{ calevnt.enddate }}</td>
              <td>{{ calevnt.hosted }}</td>
                <td style="text-align: center;">
                    <button @click="deleteCalEvntTable(calevnt.idnum)" class="btn btn-sm btn-danger" style="margin-left: 2px;">
                      <i class="fas fa-trash-alt fa-fw"></i>
                    </button>
                </td>
            </tr>
          </tbody>
        </table>
        <!--Table-->
  </div>
        

</template>

<script>
import db from "@/components/firebaseInit";
import $ from "jquery";
const dt = require("datatables.net")();

export default {
  name: "CalEventTable",
  data() {
    return {
      calevnttable: [],
    };
  },
  mounted() {
    this.dt = $(this.$refs.calevent).DataTable();
  },
  watch: {
    calevnttable(val) {
      this.dt.destroy();
      this.$nextTick(() => {
        this.dt = $(this.$refs.calevnttableTable).DataTable();
      });
    },
  },
  created() {
    this.getCalEvntTable();
  },
  methods: {
    getCalEvntTable() {
      db.collection("calevent")
        .get()
        .then(querySnapshot => {
          const calevnttable = [];
          querySnapshot.forEach(doc => {
            calevnttable.push(doc.data());
          });
          this.calevnttable = calevnttable;
        });
    },
    deleteCalEvntTable(idnum) {
      db.collection("calevent")
      .where('idnum', '==', idnum).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc =>{
          doc.ref.delete().then(this.getCalEvntTable)
        })
      })
    },
  }
};
</script>

<style></style>
