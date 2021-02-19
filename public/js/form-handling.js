function fetchData() {
  $("#sonuc").css("display", "none");
  $("#sonuc2").css("display", "block");

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
    .then(response=>response.json())
    .then(response => console.log(response))
    .catch((error) => {
      console.log(error);
    });
}
