var raporValues1 = [];
var raporValues2 = [];
var raporValues3 = [];
var raporValues4 = [];
var raporValues5 = [];

function raporVerileri() {
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
      // console.log("RESPONSE")
      // console.log(response)
      evalulateRaporData(response);
    })
    .then((res) => {
      // console.log(res)
      raporSonuc1(0);
      raporSonuc2(0);
      raporSonuc3(0);
      raporSonuc4(0);
      raporSonuc5(0);
    })
    .catch((error) => {
      // console.log(error);
    });
}

async function evalulateRaporData(response) {
  raporValues1[0] = response.rapor1_1.slice(0, 8);
  raporValues1[1] = response.rapor1_1.slice(8);
  raporValues1[2] = response.rapor1_2.slice(0, 8);
  raporValues1[3] = response.rapor1_2.slice(8);
  raporValues1[4] = response.rapor1_3.slice(0, 8);
  raporValues1[5] = response.rapor1_3.slice(8);
  raporValues1[6] = response.rapor1_4.slice(0, 8);
  raporValues1[7] = response.rapor1_4.slice(8);
  raporValues1[8] = response.rapor1_5.slice(0, 8);
  raporValues1[9] = response.rapor1_5.slice(8);
  raporValues1[10] = response.rapor1_6.slice(0, 8);
  raporValues1[11] = response.rapor1_6.slice(8);
  raporValues1[12] = response.rapor1_7.slice(0, 8);
  raporValues1[13] = response.rapor1_7.slice(8);

  raporValues2[0] = response.rapor2_1.slice(0, 2);
  raporValues2[1] = response.rapor2_1.slice(2);
  raporValues2[2] = response.rapor2_2.slice(0, 2);
  raporValues2[3] = response.rapor2_2.slice(2);
  raporValues2[4] = response.rapor2_3.slice(0, 2);
  raporValues2[5] = response.rapor2_3.slice(2);
  raporValues2[6] = response.rapor2_4.slice(0, 2);
  raporValues2[7] = response.rapor2_4.slice(2);
  raporValues2[8] = response.rapor2_5.slice(0, 2);
  raporValues2[9] = response.rapor2_5.slice(2);
  raporValues2[10] = response.rapor2_6.slice(0, 2);
  raporValues2[11] = response.rapor2_6.slice(2);
  raporValues2[12] = response.rapor2_7.slice(0, 2);
  raporValues2[13] = response.rapor2_7.slice(2);

  raporValues3[0] = response.rapor3_1.slice(0, 4);
  raporValues3[1] = response.rapor3_1.slice(4);
  raporValues3[2] = response.rapor3_2.slice(0, 4);
  raporValues3[3] = response.rapor3_2.slice(4);
  raporValues3[4] = response.rapor3_3.slice(0, 4);
  raporValues3[5] = response.rapor3_3.slice(4);
  raporValues3[6] = response.rapor3_4.slice(0, 4);
  raporValues3[7] = response.rapor3_4.slice(4);
  raporValues3[8] = response.rapor3_5.slice(0, 4);
  raporValues3[9] = response.rapor3_5.slice(4);
  raporValues3[10] = response.rapor3_6.slice(0, 4);
  raporValues3[11] = response.rapor3_6.slice(4);
  raporValues3[12] = response.rapor3_7.slice(0, 4);
  raporValues3[13] = response.rapor3_7.slice(4);

  raporValues4[0] = response.rapor4_1.slice(0, 6);
  raporValues4[1] = response.rapor4_1.slice(6);
  raporValues4[2] = response.rapor4_2.slice(0, 6);
  raporValues4[3] = response.rapor4_2.slice(6);
  raporValues4[4] = response.rapor4_3.slice(0, 6);
  raporValues4[5] = response.rapor4_3.slice(6);
  raporValues4[6] = response.rapor4_4.slice(0, 6);
  raporValues4[7] = response.rapor4_4.slice(6);
  raporValues4[8] = response.rapor4_5.slice(0, 6);
  raporValues4[9] = response.rapor4_5.slice(6);
  raporValues4[10] = response.rapor4_6.slice(0, 6);
  raporValues4[11] = response.rapor4_6.slice(6);
  raporValues4[12] = response.rapor4_7.slice(0, 6);
  raporValues4[13] = response.rapor4_7.slice(6);

  raporValues5[0] = response.rapor5_1.slice(0, 3);
  raporValues5[1] = response.rapor5_1.slice(3);
  raporValues5[2] = response.rapor5_2.slice(0, 3);
  raporValues5[3] = response.rapor5_2.slice(3);
  raporValues5[4] = response.rapor5_3.slice(0, 3);
  raporValues5[5] = response.rapor5_3.slice(3);
  raporValues5[6] = response.rapor5_4.slice(0, 3);
  raporValues5[7] = response.rapor5_4.slice(3);
  raporValues5[8] = response.rapor5_5.slice(0, 3);
  raporValues5[9] = response.rapor5_5.slice(3);
  raporValues5[10] = response.rapor5_6.slice(0, 3);
  raporValues5[11] = response.rapor5_6.slice(3);
  raporValues5[12] = response.rapor5_7.slice(0, 3);
  raporValues5[13] = response.rapor5_7.slice(3);

  return new Promise((resolve) => {
    resolve(raporValues2);
  });
}
function raporSonuc1(index) {
  if (!index) index = 0;
  $("#myChart1").replaceWith($('<canvas id="myChart1"></canvas>'));
  var ctx1 = document.getElementById("myChart1").getContext("2d");

  var myChart1 = new Chart(ctx1, {
    type: "radar",

    data: {
      labels: [
        "Sosyal Kolaylaştırma",
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
          label: "İlgi-T Puanları",
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
          borderWidth: 4,
        },
        {
          label: "Yeterlilik Algısı-T Puanları",
          data: raporValues1[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
          ],
          borderWidth: 4,
        },
      ],
    },
    
    maintainAspectRatio: false,
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 80,
          stepSize: 10,
        },
      },
    },
  });

  const tbody = document.getElementById("tbodyChart1");

  for (i = 0; i < 8; i++) {
    const trow = tbody.getElementsByTagName("tr")[i];

    var puan1 = trow
      .getElementsByTagName("td")[1]
      .getElementsByTagName("span")[0];
    var puan2 = trow
      .getElementsByTagName("td")[2]
      .getElementsByTagName("span")[0];

    puan1.innerHTML = raporValues1[index][i];
    puan2.innerHTML = raporValues1[index + 1][i];
  }
  rapor1DBInsert();
}
function raporSonuc2(index) {
  if (!index) index = 0;
  $("#myChart2").replaceWith($('<canvas id="myChart2"></canvas>'));
  let ctx2 = document.getElementById("myChart2");

  var myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Yüksek Saygınlık", "Düşük Saygınlık"],
      datasets: [
        {
          label: "İlgi-T Puanları",
          backgroundColor: "rgba(91, 155, 213, 1)",
          data: raporValues2[index],
        },
        {
          label: "Yeterlilik Algısı-T Puanları",
          backgroundColor: "rgba(255, 107, 106, 1)",
          data: raporValues2[index + 1],
        },
      ],
    },
    
    options: {
      /**
       * scale: {
        ticks: {
          min: -1,
          max: 80,
          stepSize: 10,
        },
      },
    },
       */
      scales: {
        dataset: {
          categoryPercentage: 0.5,
          barPercentage: 1,
        },
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 80,
              stepSize: 20,
            },
          },
        ],
      },
    },
  });

  const tbody = document.getElementById("tbodyChart2");

  for (i = 0; i < 2; i++) {
    const trow = tbody.getElementsByTagName("tr")[i];

    var puan1 = trow
      .getElementsByTagName("td")[1]
      .getElementsByTagName("span")[0];
    var puan2 = trow
      .getElementsByTagName("td")[2]
      .getElementsByTagName("span")[0];

    puan1.innerHTML = raporValues2[index][i];
    puan2.innerHTML = raporValues2[index + 1][i];
  }
  rapor2DBInsert();
}
function raporSonuc3(index) {
  if (!index) index = 0;
  $("#myChart3").replaceWith($('<canvas id="myChart3"></canvas>'));
  let ctx3 = document.getElementById("myChart3");
  var myChart3 = new Chart(ctx3, {
    type: "radar",

    data: {
      labels: ["İnsanlar", "Nesneler", "Veriler", "Fikirler"],
      datasets: [
        {
          label: "İlgi-T Puanları",
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
          borderWidth: 4,
        },
        {
          label: "Yeterlilik Algısı-T Puanları",
          data: raporValues3[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
          ],
          borderWidth: 4,
        },
      ],
    },
    
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 80,
          stepSize: 10,
        },
      },
    },
  });

  const tbody = document.getElementById("tbodyChart3");

  for (i = 0; i < 4; i++) {
    const trow = tbody.getElementsByTagName("tr")[i];

    var puan1 = trow
      .getElementsByTagName("td")[1]
      .getElementsByTagName("span")[0];
    var puan2 = trow
      .getElementsByTagName("td")[2]
      .getElementsByTagName("span")[0];

    puan1.innerHTML = raporValues3[index][i];
    puan2.innerHTML = raporValues3[index + 1][i];
  }
  rapor3DBInsert();
}
function raporSonuc4(index) {
  if (!index) index = 0;
  $("#myChart4").replaceWith($('<canvas id="myChart4"></canvas>'));
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
          label: "İlgi-T Puanları",
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
          borderWidth: 4,
        },
        {
          label: "Yeterlilik Algısı-T Puanları",
          data: raporValues4[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
          ],
          borderWidth: 4,
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

  const tbody = document.getElementById("tbodyChart4");

  for (i = 0; i < 6; i++) {
    const trow = tbody.getElementsByTagName("tr")[i];

    var puan1 = trow
      .getElementsByTagName("td")[1]
      .getElementsByTagName("span")[0];
    var puan2 = trow
      .getElementsByTagName("td")[2]
      .getElementsByTagName("span")[0];

    puan1.innerHTML = raporValues4[index][i];
    puan2.innerHTML = raporValues4[index + 1][i];
  }
  rapor4DBInsert();
}
function raporSonuc5(index) {
  if (!index) index = 0;
  $("#myChart5").replaceWith($('<canvas id="myChart5"></canvas>'));
  let ctx5 = document.getElementById("myChart5");
  var myChart5 = new Chart(ctx5, {
    type: "radar",

    data: {
      labels: ["İnsanlar/Nesneler", "Fikirler/Veriler", "Saygınlık"],
      datasets: [
        {
          label: "İlgi-T Puanları",
          data: raporValues5[index],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
            "rgba(91, 155, 213, 1)",
          ],
          pointBorderColor: [],
          borderWidth: 4,
        },
        {
          label: "Yeterlilik Algısı-T Puanları",
          data: raporValues5[index + 1],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderColor: [
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
            "rgba(255, 107, 106, 1)",
          ],
          borderWidth: 4,
        },
      ],
    },
    
    options: {
      aspectRatio: 1,
      scale: {
        ticks: {
          min: -1,
          max: 120,
          stepSize: 20,
        },
      },
    },
  });

  const tbody = document.getElementById("tbodyChart5");

  for (i = 0; i < 3; i++) {
    const trow = tbody.getElementsByTagName("tr")[i];

    var puan1 = trow
      .getElementsByTagName("td")[1]
      .getElementsByTagName("span")[0];
    var puan2 = trow
      .getElementsByTagName("td")[2]
      .getElementsByTagName("span")[0];

    puan1.innerHTML = raporValues5[index][i];
    puan2.innerHTML = raporValues5[index + 1][i];
  }
  rapor5DBInsert();
}

function rapor1DBInsert() {
  // console.log("rapor1");
  var userId = document.getElementById("userId").value;
  fetch("http://localhost:8080/api/survey/rapor1DB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId,
      raporValues1,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      // console.log(error);
    });
}
function rapor2DBInsert() {
  // console.log("rapor1");
  var userId = document.getElementById("userId").value;
  fetch("http://localhost:8080/api/survey/rapor2DB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId,
      raporValues2,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      // console.log(error);
    });
}
function rapor3DBInsert() {
  // console.log("rapor3");
  var userId = document.getElementById("userId").value;
  fetch("http://localhost:8080/api/survey/rapor3DB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId,
      raporValues3,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      // console.log(error);
    });
}
function rapor4DBInsert() {
  // console.log("rapor4");
  var userId = document.getElementById("userId").value;
  fetch("http://localhost:8080/api/survey/rapor4DB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId,
      raporValues4,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      // console.log(error);
    });
}
function rapor5DBInsert() {
  // console.log("rapor5");
  var userId = document.getElementById("userId").value;
  fetch("http://localhost:8080/api/survey/rapor5DB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId,
      raporValues5,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      // console.log(error);
    });
}
