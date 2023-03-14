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
          '#d00000',
          '#d92f00',
          '#e04800',
          '#e85d00',
          '#ee7000',
          '#f48300',
          '#fa9500',
          '#ffa600'
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
