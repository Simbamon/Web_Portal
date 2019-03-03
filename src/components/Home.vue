<template>
  <div style="margin-left: 20px; margin-right: 20px">
    <!-- HEADER -->
    <h1>
      <span class="badge badge-dark"><i class="fas fa-home"></i> HOME</span>
    </h1>
    <hr />
    <!-- HEADER -->

    <div class="row">
      <div class="col-lg-3">
        <div class="card border border-primary">
          <div class="card-header bg-primary">
            <div class="row">
              <div class="col-md-3">
                <i class="far fa-clock fa-4x" style="color:white"></i>
              </div>
              <div class="col-md-9 text-right">
                <h6 class="card-title text-white " v-text="currentDate"></h6>
                <h4 class="text-white" v-text="currentTime"></h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card border border-danger">
          <div class="card-header bg-danger">
            <div class="row">
              <div class="col-md-3">
                <i class="far fa-envelope fa-4x" style="color:white"></i>
              </div>
              <div class="col-md-9 text-right">
                <h6 class="text-white">New Email</h6>
                <h4 class="text-white">2</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card border border-success">
          <div class="card-header bg-success">
            <div class="row">
              <div class="col-md-3">
                <i class="fas fa-briefcase fa-4x" style="color:white"></i>
              </div>
              <div class="col-md-9 text-right">
                <h6 class="text-white">New Document</h6>
                <h4 class="text-white">1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card border border-warning">
          <div class="card-header bg-warning">
            <div class="row">
              <div class="col-md-3">
                <i class="fas fa-comments fa-4x" style="color:white"></i>
              </div>
              <div class="col-md-9 text-right">
                <h6 class="text-white">New Message</h6>
                <h4 class="text-white">5</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 20px">
      <div class="col-md-5">
        <div class="card h-100">
          <div class="card-header bg-primary text-white">
            <i class="fas fa-chart-bar fa-lg"></i> Monthly Data
          </div>
          <div class="card-body">
            <chart
              ref="chart"
              :type="'bar'"
              :data="bardata"
              :options="options"
            ></chart>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card h-100">
          <div class="card-header bg-info text-white">
            <i class="fas fa-phone fa-lg"></i> Phone Number
          </div>
          <div class="card-body">
            <li class="list-group-item">A: 123-456-7890</li>
            <li class="list-group-item">B: 234-567-8901</li>
            <li class="list-group-item">C: 345-678-9012</li>
            <a
              href="#"
              class="btn btn-primary float-right"
              style="margin-top: 30px;"
            >
              <i class="fas fa-phone-square"></i> Load More
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header bg-danger text-white">
            <i class="fas fa-check-square fa-lg"></i> Todo List
          </div>
          <div class="card-body">
            <li class="list-group-item py-1">
              <div class="checkbox icheck-danger">
                <input
                  type="checkbox"
                  class="todocheckbox"
                  unchecked
                  id="todo0"
                />
                <label class="checkedtext" for="todo0">Todo List #1</label>
              </div>
            </li>
            <li class="list-group-item py-1">
              <div class="checkbox icheck-danger">
                <input
                  type="checkbox"
                  class="todocheckbox"
                  unchecked
                  id="todo1"
                />
                <label class="checkedtext" for="todo1">Todo List #2</label>
              </div>
            </li>
            <li class="list-group-item py-1">
              <div class="checkbox icheck-danger">
                <input
                  type="checkbox"
                  class="todocheckbox"
                  unchecked
                  id="todo2"
                />
                <label class="checkedtext" for="todo2">Todo List #3</label>
              </div>
            </li>
            <li class="list-group-item py-1">
              <div class="checkbox icheck-danger">
                <input
                  type="checkbox"
                  class="todocheckbox"
                  unchecked
                  id="todo3"
                />
                <label class="checkedtext" for="todo3">Todo List #4</label>
              </div>
            </li>
            <li class="list-group-item py-1">
              <div class="checkbox icheck-danger">
                <input
                  type="checkbox"
                  class="todocheckbox"
                  unchecked
                  id="todo4"
                />
                <label class="checkedtext" for="todo4">Todo List #5</label>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 20px">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header bg-success text-white">
            <i class="fas fa-chart-pie fa-lg"></i> Department Data
          </div>
          <div class="card-body">
            <chart
              ref="chart"
              :type="'pie'"
              :data="chartdata"
              :options="options"
            ></chart>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header bg-warning text-white">
            <i class="fas fa-sticky-note fa-lg"></i> Sticky Note
          </div>
          <div class="card-body">
            <div class="form-group">
              <textarea class="form-control" rows="11"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Chart from "@/components/Chart.vue";

export default {
  name: "Home",
  components: {
    Chart
  },
  data() {
    return {
      currentDate: "",
      currentTime: "",
      chartdata: {
        labels: [
          "Department #1",
          "Department #2",
          "Department #3",
          "Department #4"
        ],
        datasets: [
          {
            data: [20, 35, 15, 30],
            backgroundColor: [
              "#1fc8db",
              "#fce473",
              "#42afe3",
              "#ed6c63",
              "#97cd76"
            ]
          }
        ]
      },
      bardata: {
        labels: [
          "Jan.",
          "Feb.",
          "Mar.",
          "Apr.",
          "May",
          "Jun.",
          "Jul.",
          "Aug.",
          "Sep.",
          "Oct.",
          "Nov.",
          "Dec."
        ],
        datasets: [
          {
            label: "DATA",
            data: [45, 50, 70, 55, 80, 35, 110, 90, 85, 90, 75, 65],
            backgroundColor: [
              "#1fc8db",
              "#fce473",
              "#42afe3",
              "#ed6c63",
              "#97cd76",
              "#d9397e",
              "#7e20d4",
              "#800000",
              "#FFD700",
              "#FF8C00",
              "#00FFFF",
              "#B22222"
            ]
          }
        ]
      },
      options: {
        segmentShowStroke: false
      }
    };
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format("LTS");
    },
    updateCurrentDate() {
      this.currentDate = moment().format("LL");
    }
  },
  created() {
    this.currentTime = moment().format("LTS");
    this.currentDate = moment().format("LL");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
};
</script>

<style scoped>
.todocheckbox:checked + .checkedtext {
  text-decoration: line-through;
}
</style>
