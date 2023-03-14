export const PieChart = {
  type: 'pie',
  data: {
    labels: [
      '77459',
      '77477',
      '75201',
      '73344',
      '75002',
      '75011',
      '75022',
      '75014'
    ],
    datasets: [
      {
        label: 'Zip Codes',
        data: [5, 8, 9, 2, 10, 14, 27, 14],
        backgroundColor: [
          '#c31a36',
          '#d03132',
          '#db452e',
          '#e55729',
          '#ee6a22',
          '#f57c1b',
          '#fb8e11',
          '#ffa104'
        ],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1
  }
}

export default PieChart
