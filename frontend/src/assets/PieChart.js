export const PieChart = {
    type: "pie",
    data: {
      labels: ["77459", "77477", "75201", "73344", "75002", "75011", "75022", "75014"],
      datasets: [
        {
          label: "Zip Codes",
          data: [5, 8, 9, 2, 10, 14, 27, 14],
          backgroundColor: ['#c80000',
                            '#d33300',
                            '#dd4e00',
                            '#e56600',
                            '#ed7c00',
                            '#f49100',
                            '#faa600',
                            '#ffbb06'],
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
  
  export default PieChart;
