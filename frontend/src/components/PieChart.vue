<template>
  <div>
    <!-- canvas element for chart -->
    <canvas id="PieChart"></canvas>
  </div>
</template>
  
  
  <script>
  import { Chart, registerables } from 'chart.js'
  import PieChart from '../assets/PieChart.js'
  import axios from 'axios'
  
  //we have to register the registerables with Chart object
  Chart.register(...registerables);
  export default {
    name: 'PieChart',
    data() {
      return {
        pieChart: null, //store chart object
        labels:[],
        data: []
      }
    },
    //establish Chart object after mounting the component
    mounted() {
      const ctx = document.getElementById('PieChart');
      this.pieChart = new Chart(ctx, PieChart);

      // Make API request to backend and retrieve data
      axios.get('http://localhost:3000/clients/')
      .then(response => {
        // Update the labels and data in the chart based on the retrieved data
        this.labels = response.data.map(client => client.address.zip);
        this.data = response.data.map(client => client.count);
        this.updateChart(); // Call update() method to apply changes to the chart
      })
      .catch(error => {
        console.error('Failed to retrieve data from backend:', error);
      });
    },
    methods: {
    updateChart() {
      // Update the chart data
      this.pieChart.data.labels = this.labels;
      this.pieChart.data.datasets[0].data = this.data;
      this.pieChart.update(); // Call update() method to apply changes to the chart
    }
  }
} 
  </script>



