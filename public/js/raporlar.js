var raporValues1 = [

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
  raporValues1[12]
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var sex = document.querySelector('input[name="radio-sex"]:checked').value;
  var scoreType1 = document.querySelector(
    'input[name="radioPersonal1"]:checked'
  ).value;
  var scoreType2 = document.querySelector(
    'input[name="radioPersonal2"]:checked'
  ).value;
  var dropdown1 = document.getElementById("dropdown1").value;
  var dropdown2 = document.getElementById("dropdown2").value;
  var resultType = document.querySelector(
    'input[name="radioPersonal3"]:checked'
  ).value;

  var hoslanma = [];
  var yapabilirlik = [];
  for (i = 1; i <= 40; i++) {
    hoslanma[i - 1] = document.querySelector(
      "input[name=radio-hoslanma" + i + "]:checked"
    ).value;
  }
  hoslanma[i - 1] = document.querySelector(
    "input[name=radio-hoslanma-ö]:checked"
  ).value;
  for (i = 1; i <= 40; i++) {
    yapabilirlik[i - 1] = document.querySelector(
      "input[name=radio-yapabilirlik" + i + "]:checked"
    ).value;
  }
  yapabilirlik[i - 1] = document.querySelector(
    "input[name=radio-yapabilirlik-ö]:checked"
  ).value;

  fetch("http://localhost:8080/api/survey/results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      hoslanma,
      yapabilirlik,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      evalulateRaporData(response);
    })
    .then(()=>{
      raporSonuc1(0);
      raporSonuc2(0);
      raporSonuc3(0);
      raporSonuc4(0);
      raporSonuc5(0);
    })
    .catch((error) => {
      console.log(error);
    });

 
}
async function evalulateRaporData(response) {
console.log(raporValues1)
  raporValues1[0] = response.rapor1_1.slice(0,8)
  console.log(raporValues1)

  raporValues1[1] = response.rapor1_1.slice(8)
  raporValues1[2] = response.rapor1_2.slice(0,8)
  raporValues1[3] = response.rapor1_2.slice(8)
  raporValues1[4] = response.rapor1_3.slice(0,8)
  raporValues1[5] = response.rapor1_3.slice(8)
  raporValues1[6] = response.rapor1_4.slice(0,8)
  raporValues1[7] = response.rapor1_4.slice(8)
  raporValues1[8] = response.rapor1_5.slice(0,8)
  raporValues1[9] = response.rapor1_5.slice(8)
  raporValues1[10] = response.rapor1_6.slice(0,8)
  raporValues1[11] = response.rapor1_6.slice(8)
  raporValues1[12] = response.rapor1_7.slice(0,8)
  raporValues1[13] = response.rapor1_7.slice(8)

  raporValues2[1] = response.rapor2_1.slice(2)
  raporValues2[2] = response.rapor2_2.slice(0,2)
  raporValues2[3] = response.rapor2_2.slice(2)
  raporValues2[4] = response.rapor2_3.slice(0,2)
  raporValues2[5] = response.rapor2_3.slice(2)
  raporValues2[6] = response.rapor2_4.slice(0,2)
  raporValues2[7] = response.rapor2_4.slice(2)
  raporValues2[8] = response.rapor2_5.slice(0,2)
  raporValues2[9] = response.rapor2_5.slice(2)
  raporValues2[10] = response.rapor2_6.slice(0,2)
  raporValues2[11] = response.rapor2_6.slice(2)
  raporValues2[12] = response.rapor2_7.slice(0,2)
  raporValues2[13] = response.rapor2_7.slice(2)

  raporValues3[1] = response.rapor3_1.slice(4)
  raporValues3[2] = response.rapor3_2.slice(0,4)
  raporValues3[3] = response.rapor3_2.slice(4)
  raporValues3[4] = response.rapor3_3.slice(0,4)
  raporValues3[5] = response.rapor3_3.slice(4)
  raporValues3[6] = response.rapor3_4.slice(0,4)
  raporValues3[7] = response.rapor3_4.slice(4)
  raporValues3[8] = response.rapor3_5.slice(0,4)
  raporValues3[9] = response.rapor3_5.slice(4)
  raporValues3[10] = response.rapor3_6.slice(0,4)
  raporValues3[11] = response.rapor3_6.slice(4)
  raporValues3[12] = response.rapor3_7.slice(0,4)
  raporValues3[13] = response.rapor3_7.slice(4)

  raporValues4[1] = response.rapor4_1.slice(6)
  raporValues4[2] = response.rapor4_2.slice(0,6)
  raporValues4[3] = response.rapor4_2.slice(6)
  raporValues4[4] = response.rapor4_3.slice(0,6)
  raporValues4[5] = response.rapor4_3.slice(6)
  raporValues4[6] = response.rapor4_4.slice(0,6)
  raporValues4[7] = response.rapor4_4.slice(6)
  raporValues4[8] = response.rapor4_5.slice(0,6)
  raporValues4[9] = response.rapor4_5.slice(6)
  raporValues4[10] = response.rapor4_6.slice(0,6)
  raporValues4[11] = response.rapor4_6.slice(6)
  raporValues4[12] = response.rapor4_7.slice(0,6)
  raporValues4[13] = response.rapor4_7.slice(6)

  raporValues5[1] = response.rapor5_1.slice(3)
  raporValues5[2] = response.rapor5_2.slice(0,3)
  raporValues5[3] = response.rapor5_2.slice(3)
  raporValues5[4] = response.rapor5_3.slice(0,3)
  raporValues5[5] = response.rapor5_3.slice(3)
  raporValues5[6] = response.rapor5_4.slice(0,3)
  raporValues5[7] = response.rapor5_4.slice(3)
  raporValues5[8] = response.rapor5_5.slice(0,3)
  raporValues5[9] = response.rapor5_5.slice(3)
  raporValues5[10] = response.rapor5_6.slice(0,3)
  raporValues5[11] = response.rapor5_6.slice(3)
  raporValues5[12] = response.rapor5_7.slice(0,3)
  raporValues5[13] = response.rapor5_7.slice(3)
  return new Promise((resolve)=>{
    resolve("done")
  })
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

  const tbody = document.getElementById("tbodyChart1")
  
  for(i=0;i<8;i++){
    const trow = tbody.getElementsByTagName("tr")[i]
    
    var puan1 = trow.getElementsByTagName("td")[1].getElementsByTagName("span")[0]
    var puan2 = trow.getElementsByTagName("td")[2].getElementsByTagName("span")[0]
    
    puan1.innerHTML = raporValues1[index][i]
    puan2.innerHTML = raporValues1[index+1][i]
  }

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

  const tbody = document.getElementById("tbodyChart2")
  
  for(i=0;i<2;i++){
    const trow = tbody.getElementsByTagName("tr")[i]
    
    var puan1 = trow.getElementsByTagName("td")[1].getElementsByTagName("span")[0]
    var puan2 = trow.getElementsByTagName("td")[2].getElementsByTagName("span")[0]
    
    puan1.innerHTML = raporValues2[index][i]
    puan2.innerHTML = raporValues2[index+1][i]
  }
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

  const tbody = document.getElementById("tbodyChart3")
  
  for(i=0;i<4;i++){
    const trow = tbody.getElementsByTagName("tr")[i]
    
    var puan1 = trow.getElementsByTagName("td")[1].getElementsByTagName("span")[0]
    var puan2 = trow.getElementsByTagName("td")[2].getElementsByTagName("span")[0]
    
    puan1.innerHTML = raporValues3[index][i]
    puan2.innerHTML = raporValues3[index+1][i]
  }
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

  const tbody = document.getElementById("tbodyChart4")
  
  for(i=0;i<6;i++){
    const trow = tbody.getElementsByTagName("tr")[i]
    
    var puan1 = trow.getElementsByTagName("td")[1].getElementsByTagName("span")[0]
    var puan2 = trow.getElementsByTagName("td")[2].getElementsByTagName("span")[0]
    
    puan1.innerHTML = raporValues4[index][i]
    puan2.innerHTML = raporValues4[index+1][i]
  }
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

  const tbody = document.getElementById("tbodyChart5")
  
  for(i=0;i<3;i++){
    const trow = tbody.getElementsByTagName("tr")[i]
    
    var puan1 = trow.getElementsByTagName("td")[1].getElementsByTagName("span")[0]
    var puan2 = trow.getElementsByTagName("td")[2].getElementsByTagName("span")[0]
    
    puan1.innerHTML = raporValues5[index][i]
    puan2.innerHTML = raporValues5[index+1][i]
  }
}
