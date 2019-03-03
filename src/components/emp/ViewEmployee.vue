<template>
  <div id="view-employee">

    <!--HEADER-->
    <h1><span class="badge badge-dark"><i class="fas fa-users"></i> PILOT LIST</span></h1>
    <hr>
    <!--HEADER-->
  
    <table class="table table-bordered">
      
      <!--TABLE HEADER-->
      <thead>
        <tr>
          <th colspan="2" scope="col" class="bg-primary">
            <li class="d-flex justify-content-between ">
              <h4 class="text-white">{{ name }}</h4>
              <div class="fixed-action-btn">
                <router-link
                  v-bind:to="{
                    name: 'edit-employee',
                    params: { employee_id: employee_id }
                  }"
                >
                  <button type="button" class="btn btn-space btn-outline-light btn-sm">
                    <i class="fa fa-pen"></i> Edit
                  </button>
                 <button @click="deleteEmployee" class="btn btn-space btn-danger btn-sm">
                  <i class="fas fa-trash-alt"></i> Delete
                  </button> 
                </router-link>
              </div>
            </li>
          </th>
        </tr>
      </thead>
      <!--TABLE HEADER-->

      <!--TABLE BODY-->
      <tbody>
        <tr>
          <th scope="row" class="w-25">Occupation:</th>
          <td class>{{ occupation }}</td>
        </tr>
        <tr>
          <th scope="row" class="w-25">Position:</th>
          <td>{{ position }}</td>
        </tr>
        <tr>
          <th scope="row" class="w-25">Rank:</th>
          <td>{{ rank }}</td>
        </tr>
        <tr>
          <th scope="row" class="w-25">Employee ID#:</th>
          <td>{{ employee_id }}</td>
        </tr>
      </tbody>
    </table>
    <!--TABLE BODY-->


    <!--BUTTON-->
    <router-link to="/emp" class="btn btn-secondary">
    <i class="fas fa-arrow-left"></i> Go Back
    </router-link>
    <!--BUTTON-->

    
  </div>
</template>

<script>
import db from "@/components/firebaseInit";

export default {
  name: "view-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      occupation: null,
      position: null,
      rank: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("employees")
      .where("employee_id", "==", to.params.employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.employee_id = doc.data().employee_id;
            vm.name = doc.data().name;
            vm.occupation = doc.data().occupation;
            vm.position = doc.data().position;
            vm.rank = doc.data().rank;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.employee_id = doc.data().employee_id;
            this.name = doc.data().name;
            this.occupation = doc.data().occupation;
            this.position = doc.data().position;
            this.rank = doc.data().rank;
          });
        });
    },
    deleteEmployee() {
        db.collection("employees")
          .where("employee_id", "==", this.$route.params.employee_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/emp");
            });
          });
    }
  }
};
</script>

<style scope>
.btn-space {
    margin-right: 5px;
}
</style>
