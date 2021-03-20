function fetchData() {
  fetch("http://localhost:8080/api/survey/getLiselerData")
    .then((response) => response.json())
    .then((response) => {
      for (i = 0; i < response.length; i++) {
        var element = document.getElementById("dropdown1");
        var option = document.createElement("option");
        option.text = response[i].isim;
        element.add(option);
        // console.log(i +" " + response[i].isim)
      }
    })
    .catch((error) => {
      console.log(error);
    });

  fetch("http://localhost:8080/api/survey/getMesleklerData")
    .then((response) => response.json())
    .then((response) => {
      for (i = 0; i < response.length; i++) {
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
      // console.log(response.length);
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
    .then((response) => returnResults(response))
    .catch((error) => {
      console.log(error);
    });
}

function userComments() {
  $("#son").css("display", "none");
  $("#thankyou").css("display", "block");
  var comment = document.getElementById("comment").value;
  var value = document.querySelector('input[name="radio-Yorum"]:checked').value;
  var userId = document.getElementById("userId").value;

  console.log(value + " " + comment);

  fetch("http://localhost:8080/api/survey/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      value,
      comment,
      userId,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      console.log(error);
    });
}

function insertHoslantiAndYapabilirlik() {
  var i,
    j = 0;
  for (i = 1; i < 41; i++) {
    if (
      document.querySelector("input[name=radio-hoslanma" + i + "]:checked")
        .checked == true &&
      document.querySelector("input[name=radio-yapabilirlik" + i + "]:checked")
        .checked == true &&
      document.querySelector("input[name=radio-hoslanma-ö]:checked").checked ==
          true &&
      document.querySelector("input[name=radio-yapabilirlik-ö]:checked")
        .checked == true && 
      document.querySelector("input[name=radio-hoslanma-ö]:checked").value==4 && 
      document.querySelector("input[name=radio-yapabilirlik-ö]:checked").value==4
    ) {
      j++;
    }
  }
  if (j == 40) {
    $("#anket5").css("display", "none");
    $("#sonuc").css("display", "block");
    var userId = document.getElementById("userId").value;
    var arrHos = [];
    var arrYap = [];
    for (var a = 1; a < 41; a++) {
      arrHos[a] = document.querySelector(
        "input[name=radio-hoslanma" + a + "]:checked"
      ).value;
      arrYap[a] = document.querySelector(
        "input[name=radio-yapabilirlik" + a + "]:checked"
      ).value;
    }
    fetch("http://localhost:8080/api/survey/hoslanti", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId,
        arrHos,
      }),
    })
      .then((response) => response.json())
      .then((response) => returnResults(response))
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:8080/api/survey/yapabilirlik", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId,
        arrYap,
      }),
    })
      .then((response) => response.json())
      .then((response) => returnResults(response))
      .catch((error) => {
        console.log(error);
      });
      raporVerileri();
      window.scrollTo({ top: 180, behavior: 'smooth' });
  } else {
    alert("Lütfen maddeleri doğru ve eksiksiz işaretleyiniz!");
  }
}
function goToDescription() {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  if (
    name != "" &&
    age != "" &&
    sex != 0 &&
    scoreType1 != 0 &&
    scoreType2 != 0 &&
    dropdown1 != 0 &&
    dropdown2 != 0
  ) {
    $("#rumuz").css("display", "none");
    $("#anket").css("display", "block");

    fetch("http://localhost:8080/api/survey/users", {
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
      .then((response) => returnResults(response))
      .catch((error) => {
        console.log(error);
      });

    //getLastUserId
    fetch("http://localhost:8080/api/survey/lastUserId")
      .then((response) => response.json())
      .then((response) => {
        for (i = 0; i < response.length; i++) {
          $("#userId").val(response[i].Id);
        }
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //getUserInfo
    $("label[for='raporRumuz']").text(name);
    $("label[for='raporYas']").text(age);
    $("label[for='raporCins']").text(sex);
    $("label[for='raporSoru1']").text(scoreType1);
    $("label[for='raporSoru2']").text(scoreType2);
    $("label[for='raporSoru3']").text(dropdown1);
    $("label[for='raporSoru4']").text(dropdown2);
  } else {
    alert("Lütfen tüm alanları doldurunuz.");
  }
}

function goToAnket3() {
    $("#anket2").css("display", "none");
    $("#anket3").css("display", "block");
}
function goToAnket4() {
  window.scrollTo({ top: 65, behavior: "smooth" });
    $("#anket3").css("display", "none");
    $("#anket4").css("display", "block");
}

function goToAnket5() {
    $("#anket4").css("display", "none");
    $("#anket5").css("display", "block");
}

function returnResults(response) {}
