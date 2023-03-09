<template>
    <div>
      <!-- canvas element for chart -->
      <canvas id="PieChart"></canvas>
    </div>
  </template>
  
  
  <script>
  import { Chart, registerables } from 'chart.js'
  import PieChart from '../assets/PieChart.js'
  
  //we have to register the registerables with Chart object
  Chart.register(...registerables);
  export default {
    name: 'PieChart',
    data() {
      return {
        PieChart: PieChart
      }
    },
    //establish Chart object after mounting the component
    mounted() {
      const ctx = document.getElementById('PieChart');
      new Chart(ctx, this.PieChart);
    }
  }
  </script>
  