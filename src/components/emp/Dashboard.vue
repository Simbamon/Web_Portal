<template>
  <div id="dashboard">
    
    <!--HEADER-->
    <h1><span class="badge badge-dark"><i class="fas fa-users"> Employees LIST</i></span></h1>
    <hr>
    <!--HEADER-->

    <ul class="list-group">
      <li
        class="navbar bg-primary text-white d-flex justify-content-between"
      >
        <h3>Employees</h3>
        <router-link to="/emp/new">
          <button type="button" class="btn btn-outline-light btn-sm">
            <i class="fas fa-plus"> Add</i>
          </button>
        </router-link>
      </li>
      <li
        v-for="employee in employees"
        v-bind:key="employee.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <span class="badge badge-primary badge-pill">{{
            employee.occupation
          }}</span>
          {{ employee.name }}
        </div>
        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-employee',
            params: { employee_id: employee.employee_id }
          }"
        >
          <i class="fa fa-id-card fa-lg"></i>
        </router-link>
      </li>
    </ul>
      
  </div>
</template>

<script>
import db from "@/components/firebaseInit";

export default {
  name: "emp-dashboard",
  data() {
    return {
      employees: [],

    };
  },
  created() {
    db.collection("employees")
      //order
      .orderBy("occupation")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            occupation: doc.data().occupation,
            position: doc.data().position,
            rank: doc.data().rank
          };
          this.employees.push(data);
        });
      });
  }
};
</script>

<style scope>

</style>
