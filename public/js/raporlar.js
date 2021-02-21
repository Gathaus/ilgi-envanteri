var raporValues1 = [
  //Lise 0
  [55, 65, 45, 45, 65, 65, 55, 55],
  [45, 55, 45, 25, 55, 55, 36, 12],
  //Liseli Kız 2
  [0, 65, 45, 45, 0, 65, 55, 55],
  [45, 55, 45, 0, 55, 55, 36, 12],
  //Liseli Erkek 4
  [55, 65, 45, 45, 65, 65, 55, 55],
  [45, 55, 45, 25, 55, 55, 36, 12],
  //Üniversite 6
  [55, 4, 45, 45, 65, 65, 55, 55],
  [45, 55, 45, 25, 55, 55, 36, 12],
  //Üniversiteli Kız 8
  [55, 65, 5, 45, 65, 65, 55, 55],
  [45, 55, 45, 25, 55, 55, 36, 12],
  //Üniversiteli Erkek 10
  [55, 65, 45, 45, 65, 65, 55, 55],
  [45, 55, 45, 25, 55, 55, 36, 12],
  //Genel 12
  [0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
var raporValues2 = [
  //Lise 0
  [30, 70],
  [20, 50],
  //Liseli Kız 2
  [30, 70],
  [20, 50],
  //Liseli Erkek 4
  [30, 70],
  [20, 50],
  //Üniversite 6
  [30, 70],
  [20, 50],
  //Üniversiteli Kız 8
  [30, 70],
  [20, 50],
  //Üniversiteli Erkek 10
  [1, 10],
  [55, 5],
  //Genel 12
  [0, 70],
  [20, 0],
];
var raporValues3 = [
  //Lise 0
  [55, 65, 45, 45],
  [55, 55, 65, 55],
  //Liseli Kız 2
  [55, 65, 45, 45],
  [55, 55, 65, 55],
  //Liseli Erkek 4
  [55, 65, 45, 45],
  [55, 55, 65, 55],
  //Üniversite 6
  [55, 65, 45, 45],
  [55, 55, 65, 55],
  //Üniversiteli Kız 8
  [55, 65, 45, 45],
  [55, 55, 65, 55],
  //Üniversiteli Erkek 10
  [55, 65, 45, 45],
  [55, 55, 65, 55],
  //Genel 12
  [55, 0, 45, 0],
  [55, 55, 0, 55],
];
var raporValues4 = [
  //Lise 0
  [55, 65, 45, 45, 65, 65],
  [11, 65, 23, 44, 65, 42],
  //Liseli Kız 2
  [55, 65, 45, 45, 65, 65],
  [11, 65, 23, 44, 65, 42],
  //Liseli Erkek 4
  [55, 65, 45, 45, 65, 65],
  [11, 65, 23, 44, 65, 42],
  //Üniversite 6
  [55, 65, 45, 45, 65, 65],
  [11, 65, 23, 44, 65, 42],
  //Üniversiteli Kız 8
  [55, 65, 45, 45, 65, 65],
  [11, 65, 23, 44, 65, 42],
  //Üniversiteli Erkek 10
  [55, 65, 45, 45, 65, 65],
  [11, 65, 23, 44, 65, 42],
  //Genel 12
  [55, 65, 0, 45, 65, 0],
  [11, 65, 23, 44, 0, 42],
];
var raporValues5 = [
  //Lise 0
  [45, 55, 11],
  [45, 22, 45],
  //Liseli Kız 2
  [45, 55, 11],
  [45, 22, 45],
  //Liseli Erkek 4
  [45, 55, 11],
  [45, 22, 45],
  //Üniversite 6
  [45, 55, 11],
  [45, 22, 45],
  //Üniversiteli Kız 8
  [45, 55, 11],
  [45, 22, 45],
  //Üniversiteli Erkek 10
  [45, 55, 11],
  [45, 22, 45],
  //Genel 12
  [25, 11, 11],
  [45, 22, 44],
];

function raporVerileri() {
  fetch("http://localhost:8080/api/survey/getRaporData")
    .then((response) => response.json())
    .then((response) => {
      raporValues1=response.rapor1;
    })
    .catch((error) => {
      console.log(error);
    });

  raporSonuc1();
  raporSonuc2();
  raporSonuc3();
  raporSonuc4();
  raporSonuc5();
}

function raporSonuc1(index) {
  if (!index) index = 0;
  var ctx1 = document.getElementById("myChart1");

  var myChart1 = new Chart(ctx1, {
    type: "radar",

    data: {
      labels: [
        "Kolaylaştırma",
        "Yönetim",
        "İş Ayrıntıları",
        "Veri İşleme",
        "Mekanik",
        "Doğa/Açık Alan",
        "Sanat",
        "Yardım",
      ],
      datasets: [
        {
          label: "ilgi-T puanları",
          data: raporValues1[index],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
          ],
          pointBorderColor: [],
          borderWidth: 5,
        },
        {
          label: "Yeterlilik Algısı-T puanları",
          data: raporValues1[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 5,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 70,
          stepSize: 10,
        },
      },
    },
  });
}
function raporSonuc2(index) {
  if (!index) index = 0;
  let ctx2 = document.getElementById("myChart2");

  var myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Yüksek Saygınlık", "Düşük Saygınlık"],
      datasets: [
        {
          label: "ilgi-T puanları",
          backgroundColor: "rgba(91, 155, 213, 1)",
          data: raporValues2[index],
        },
        {
          label: "Yeterlilik Algısı-T puanları",
          backgroundColor: "rgba(255, 99, 132, 1)",
          data: raporValues2[index + 1],
        },
      ],
    },
    options: {
      scales: {
        dataset: {
          categoryPercentage: 0.5,
          barPercentage: 1,
        },
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
function raporSonuc3(index) {
  if (!index) index = 0;
  let ctx3 = document.getElementById("myChart3");

  var myChart3 = new Chart(ctx3, {
    type: "radar",

    data: {
      labels: ["İnsanlar", "Veriler", "Nesneler", "Fikirler"],
      datasets: [
        {
          label: "ilgi-T puanları",
          data: raporValues3[index],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
          ],
          pointBorderColor: [],
          borderWidth: 5,
        },
        {
          label: "Yeterlilik Algısı-T puanları",
          data: raporValues3[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 5,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 70,
          stepSize: 10,
        },
      },
    },
  });
}
function raporSonuc4(index) {
  if (!index) index = 0;
  let ctx4 = document.getElementById("myChart4");

  var myChart4 = new Chart(ctx4, {
    type: "radar",

    data: {
      labels: [
        "Realistik",
        "Araştırmacı",
        "Yaratıcı",
        "Sosyal",
        "Girişimci",
        "Düzenli",
      ],
      datasets: [
        {
          label: "ilgi-T puanları",
          data: raporValues4[index],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
          ],
          pointBorderColor: [],
          borderWidth: 5,
        },
        {
          label: "Yeterlilik Algısı-T puanları",
          data: raporValues4[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 5,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 70,
          stepSize: 10,
        },
      },
    },
  });
}
function raporSonuc5(index) {
  if (!index) index = 0;
  let ctx5 = document.getElementById("myChart5");

  var myChart5 = new Chart(ctx5, {
    type: "radar",

    data: {
      labels: ["İnsanlar/Nesneler", "Fikirler/Veriler", "Saygınlık"],
      datasets: [
        {
          label: "ilgi-T puanları",
          data: raporValues5[index],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
          ],
          pointBorderColor: [],
          borderWidth: 5,
        },
        {
          label: "Yeterlilik Algısı-T puanları",
          data: raporValues5[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 5,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 90,
          stepSize: 10,
        },
      },
    },
  });
}
