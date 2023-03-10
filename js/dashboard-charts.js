$(function () {
  var ctx = document.getElementById("invChart").getContext('2d');
  var data = {
    datasets: [{
      data: [20000000, 19480000],
      backgroundColor: [
        '#3B71CA',
        '#E4A11B',

      ],
    }],
    labels: [
      'Dana Pengembangan Pendidikan Nasional',
      'Fasilitas Likuiditas Pembiayaan Perumahan',

    ]
  };
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            if (Chart.helpers.isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  });

  var ctx_2 = document.getElementById("PPChart").getContext('2d');
  var data_2 = {
    datasets: [{
      data: [1783927, 21460],
      backgroundColor: [
        '#DC4C64',
        '#54B4D3',

      ],
    }],
    labels: [
      'Pinjaman ke BUMN',
      'Pinjaman ke PEMDA',

    ]
  };
  var myDoughnutChart_2 = new Chart(ctx_2, {
    type: 'doughnut',
    data: data_2,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            if (Chart.helpers.isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  });

  var ctx_3 = document.getElementById("SBChart").getContext('2d');
  var data_3 = {
    datasets: [{
      data: [0],
      backgroundColor: [
        '#14A44D',


      ],
    }],
    labels: [
      '-',


    ]
  };
  var myDoughnutChart_3 = new Chart(ctx_3, {
    type: 'doughnut',
    data: data_3,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            if (Chart.helpers.isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  });

  var ctx_4 = document.getElementById("plChart").getContext('2d');
  var data_4 = {
    datasets: [{
      data: [9920000, 52110000],
      backgroundColor: [
        '#14A44D',
        '#54B4D3',


      ],
    }],
    labels: [
      'Piutang Lancar Pemerintah',
      'Piutang Jangka Panjang Pemerintah',


    ]
  };

  var myDoughnutChart_4 = new Chart(ctx_4, {
    type: 'doughnut',
    data: data_4,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            if (Chart.helpers.isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  });

  var ctx_5 = document.getElementById("niChart").getContext('2d');
  var data_5 = {
    datasets: [{
      data: [66680000, 119120000],
      backgroundColor: [
        '#0275d8',
        '#5cb85c',


      ],
    }],
    labels: [
      'Investasi Likuiditas Pembiayaan Perumahan',
      'Investasi Pada LPDP',


    ]
  };

  var myDoughnutChart_5 = new Chart(ctx_5, {
    type: 'doughnut',
    data: data_5,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            if (Chart.helpers.isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  });


  var ctx_6 = document.getElementById("penerimaanChart").getContext('2d');
  var data_6 = {
    datasets: [{
      data: [765700, 210600],
      backgroundColor: [
        '#dc3545',
        '#0275d8',


      ],
    }],
    labels: [
      'Investasi Likuiditas Pembiayaan Perumahan',
      'Investasi Pada LPDP',


    ]
  };

  var myDoughnutChart_6 = new Chart(ctx_6, {
    type: 'bar',
    data: data_6,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      scales: {
        xAxes: [{
          ticks: {
            display: false // Hide x-axis ticks
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            color: '#ffffff'
          }
        }]
      },

      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataLabel = data.labels[tooltipItem.index];
            var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
            if (Chart.helpers.isArray(dataLabel)) {
              dataLabel = dataLabel.slice();
              dataLabel[0] += value;
            } else {
              dataLabel += value;
            }
            return dataLabel;
          }
        }
      }
    }
  });


});
