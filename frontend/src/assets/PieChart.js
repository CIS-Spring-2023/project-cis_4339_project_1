import axios from "axios"; // Import Axios library

export const PieChart = {
    type: "pie",
    data: {
      labels: [],
      datasets: [
        {
          label: "Zip Codes",
          data: [],
          backgroundColor: ['#c80000',
                            '#d33300',
                            '#dd4e00',
                            '#e56600',
                            '#ed7c00',
                            '#f49100',
                            '#faa600',
                            '#ffbb06',
                            '#ffdc80',
                            '#f55353'],
          borderColor: "black",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1
    }
  };
  
  // axios.get("http://localhost:3000/clients/") // Update the URL to match your back end API endpoint
  // .then(response => {
  //   // Update labels and data arrays with data from back end
  //   PieChart.data.labels = response.data.labels;
  //   PieChart.data.datasets[0].data = response.data.data;
  // })
  // .catch(error => {
  //   console.error("Failed to fetch data from back end:", error);
  // });

  export default PieChart;
