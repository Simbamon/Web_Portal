<template>
  <canvas class="chartjs"></canvas>
</template>

<script>
import Chart from "chart.js";

const types = [
  "bar",
  "pie",
];
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: val => types.includes(val)
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
  },
  mounted() {
    this.resetChart();
  },
  data() {
    return {
      chart: null
    };
  },
  methods: {
    resetChart() {
      if (this.chart) this.chart.destroy();
      this.chart = new Chart(this.$el, {
        type: this.type,
        data: this.data,
        options: this.options,
        plugins: this.plugins
      });
    }
  },
  watch: {
    data(newData) {
      this.chart.update();
    },
  }
};
</script>
