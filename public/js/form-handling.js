function fetchData() {
  fetch("http://localhost:8080/api/survey/getLiselerData")
    .then((response) => response.json())
    .then((response) => {
      for (i = 0; i < response.length; i++) {
        var element = document.getElementById("dropdown1");
        var option = document.createElement("option");
        option.text = response[i].isim;
        element.add(option);
      }
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  fetch("http://localhost:8080/api/survey/getMesleklerData")
    .then((response) => response.json())
    .then((response) => {
      for (i = 0; i < response.length * 3; i++) {
        var element = document.getElementById("dropdown2");
        var option = document.createElement("option");
        option.text = response[i].isim;
        element.add(option);
      }
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  fetch("http://localhost:8080/api/survey/getSorularData")
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      let soruCount = 0;
      let breakCheck = false;
      console.log(response.length);
      for (i = 1; i <= response.length / 4; i++) {
        const tbody = document.getElementById("tbody" + i);
        for (k = 0; k < 10; k++) {
          const trow = tbody.getElementsByTagName("tr")[k];
          // console.log("trow");
          // console.log(k);
          const soru = trow.getElementsByTagName("td")[2];
          soru.innerHTML = soruCount + 1 + ". " + response[soruCount].Soru;
          if (soruCount >= response.length - 1) {
            breakCheck = true;
            break;
          }
          soruCount++;
          // console.log(
          //   "Soru Count: " +
          //     soruCount +
          //     "i: " +
          //     i +
          //     " " +
          //     "k: " +
          //     k +
          //     " " +
          //     soru.innerHTML
          // );
        }
        if (breakCheck == true) break;
        //Geçerlilik maddesi için konuldu
        if (soruCount + 1 == 31) {
          // console.log("ÇALIŞTI")
          const trow = tbody.getElementsByTagName("tr")[k];
          const soru = trow.getElementsByTagName("td")[2];
          soru.innerHTML = soruCount + 1 + ". " + response[soruCount].Soru;
          soruCount++;
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function calculateData() {
  $("#sonuc").css("display", "none");
  $("#sonuc2").css("display", "block");
  // console.log(sessionStorage)

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

  console.log(
    JSON.stringify({
      name,
      age,
      sex,
      scoreType1,
      scoreType2,
      dropdown1,
      dropdown2,
      resultType,
    })
  );

  fetch("http://localhost:8080/api/survey/results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name,
      age,
      sex,
      scoreType1,
      scoreType2,
      dropdown1,
      dropdown2,
      resultType,
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
    });
}
