<template>
  <div id="new-employee">
  
  <!--HEADER-->
  <h1><span class="badge badge-dark"><i class="fas fa-users"> PILOT LIST</i></span></h1>
  <hr>
  <!--HEADER-->

    <!--CONTENT HEADER-->
    <nav class="navbar bg-success text-white"><h3>New Employee</h3></nav>
    <!--CONTENT HEADER-->
    
    
    <div class="card flex-row flex-wrap">
      <div class="card-header border-0">
        <h4 class="text-center">Profile Picture</h4>
        <img src="https://vignette.wikia.nocookie.net/redneckheist/images/e/e1/Male_empty_profile.png/revision/latest?cb=20180131231634" alt="Profile Picture" /> <br />
      </div>
      <div class="col">
        <div class="card-block px-2">
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text bg-success text-white">
                Employee ID#
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="employee_id"
              required
            />
          </div>

          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text bg-success text-white text-center">
                Employee Name
              </div>
            </div>
            <input type="text" class="form-control" v-model="name" required />
          </div>

          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text bg-success text-white">
                Occupation
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="occupation"
              required
            />
          </div>

          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text bg-success text-white">Position</div>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="position"
              required
            />
          </div>

          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text bg-success text-white">Rank</div>
            </div>
            <input type="text" class="form-control" v-model="rank" required />
          </div>
        </div>
      </div>
      <div class="card-footer w-100 d-flex justify-content-between">
        <form>
        <label class="btn btn-space btn-secondary">
            <input
              type="file"
              class="form-control-file buttonName : 'btn-secondary'"
              style="display:none"
              id="exampleFormControlFile1"
            />
            <i class="fas fa-camera-retro"> Upload Picture</i>
        </label>
        </form>
        <form @submit.prevent="saveEmployee" class="float-right">
          <div class="float-right">
            <button type="submit" class="btn btn-space btn-primary">
              <i class="fas fa-clipboard-check"> Confirm</i>
            </button>
            <router-link to="/emp" class="btn btn-space btn-danger">
              <i class="fas fa-ban"> Cancel</i>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/components/firebaseInit";

export default {
  name: "new-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      occupation: null,
      position: null,
      rank: null
    };
  },
  methods: {
    saveEmployee() {
      db.collection("employees")
        .add({
          employee_id: this.employee_id,
          name: this.name,
          occupation: this.occupation,
          position: this.position,
          rank: this.rank
        })
        .then(docRef => this.$router.push("/emp"))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>

.card-block {
  padding-top: 20px;
  padding-bottom: 20px;
}

.input-group-prepend {
  width: 20%; /*adjust as needed*/
}

.input-group-text {
  width: 100%;
  text-align: center;
}
.btn-space {
  margin-right: 5px;
}


</style>
