export const PieChart = {
    type: "pie",
    data: {
      labels: ["77459", "77477", "75201", "73344", "75002", "75011", "75022", "75014"],
      datasets: [
        {
          label: "Number of Moons",
          data: [5, 8, 9, 2, 10, 14, 27, 14],
          backgroundColor: ['rgba(54,73,93,.5)','rgba(14,24,244,.2)','rgba(46,68,35,.5)','rgba(245,40,145,.8)','rgba(63,12,57,.8)','rgba(129,140,117,.8)','rgba(186,148,53,.8)','rgba(111,123,214,.8)'],
          borderColor: "#36495d",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1
    }
  };
  
  export default PieChart;
