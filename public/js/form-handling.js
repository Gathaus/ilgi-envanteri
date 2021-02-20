const { post } = require("../../routes");

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

function userComments(){
  $('#son').css('display','none');
  $('#thankyou').css('display','block');
  var comment = document.getElementById("comment").value;
  var value = document.querySelector('input[name="radio-Yorum"]:checked').value;

  console.log(value+" "+comment)

  fetch("http://localhost:8080/api/survey/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      value,
      comment,
    }),
  })
    .then((response) => response.json())
    .then((response) => returnResults(response))
    .catch((error) => {
      console.log(error);
    });

}

function insertHoslantiAndYapabilirlik(){

  $('#anket5').css('display', 'none');$('#sonuc').css('display', 'block');
    var value31 = document.querySelector('input[name="radio-hoslanma31"]:checked').value;
    var value32 = document.querySelector('input[name="radio-hoslanma32"]:checked').value;
    var value33 = document.querySelector('input[name="radio-hoslanma33"]:checked').value;
    var value34 = document.querySelector('input[name="radio-hoslanma34"]:checked').value;
    var value35 = document.querySelector('input[name="radio-hoslanma35"]:checked').value;
    var value36 = document.querySelector('input[name="radio-hoslanma36"]:checked').value;
    var value37 = document.querySelector('input[name="radio-hoslanma37"]:checked').value;
    var value38 = document.querySelector('input[name="radio-hoslanma38"]:checked').value;
    var value39 = document.querySelector('input[name="radio-hoslanma39"]:checked').value;
    var value40= document.querySelector('input[name="radio-hoslanma40"]:checked').value;
    var value31y = document.querySelector('input[name="radio-yapabilirlik31"]:checked').value;
    var value32y = document.querySelector('input[name="radio-yapabilirlik32"]:checked').value;
    var value33y = document.querySelector('input[name="radio-yapabilirlik33"]:checked').value;
    var value34y = document.querySelector('input[name="radio-yapabilirlik34"]:checked').value;
    var value35y = document.querySelector('input[name="radio-yapabilirlik35"]:checked').value;
    var value36y = document.querySelector('input[name="radio-yapabilirlik36"]:checked').value;
    var value37y = document.querySelector('input[name="radio-yapabilirlik37"]:checked').value;
    var value38y = document.querySelector('input[name="radio-yapabilirlik38"]:checked').value;
    var value39y = document.querySelector('input[name="radio-yapabilirlik39"]:checked').value;
    var value40y= document.querySelector('input[name="radio-yapabilirlik40"]:checked').value;
  //if(value31 !=0 && value32 !=0 && value33 !=0 && value34 !=0 && value35 !=0 && value36 !=0 && value37 !=0 && value38 !=0 && value39 !=0 && value40 !=0 && value31y !=0 && value32y !=0 && value33y !=0 && value34y !=0 && value35y !=0 && value36y !=0 && value37y !=0 && value38y !=0 && value39y !=0 && value40y !=0 ){
    //$('#anket5').css('display', 'none');$('#sonuc').css('display', 'block');
    var userId=1;
    var value1 = document.querySelector('input[name="radio-hoslanma1"]:checked').value;
    var value2 = document.querySelector('input[name="radio-hoslanma2"]:checked').value;
    var value3 = document.querySelector('input[name="radio-hoslanma3"]:checked').value;
    var value4 = document.querySelector('input[name="radio-hoslanma4"]:checked').value;
    var value5 = document.querySelector('input[name="radio-hoslanma5"]:checked').value;
    var value6 = document.querySelector('input[name="radio-hoslanma6"]:checked').value;
    var value7 = document.querySelector('input[name="radio-hoslanma7"]:checked').value;
    var value8 = document.querySelector('input[name="radio-hoslanma8"]:checked').value;
    var value9 = document.querySelector('input[name="radio-hoslanma9"]:checked').value;
    var value10 = document.querySelector('input[name="radio-hoslanma10"]:checked').value;
    var value11 = document.querySelector('input[name="radio-hoslanma11"]:checked').value;
    var value12 = document.querySelector('input[name="radio-hoslanma12"]:checked').value;
    var value13 = document.querySelector('input[name="radio-hoslanma13"]:checked').value;
    var value14 = document.querySelector('input[name="radio-hoslanma14"]:checked').value;
    var value15 = document.querySelector('input[name="radio-hoslanma15"]:checked').value;
    var value16 = document.querySelector('input[name="radio-hoslanma16"]:checked').value;
    var value17 = document.querySelector('input[name="radio-hoslanma17"]:checked').value;
    var value18 = document.querySelector('input[name="radio-hoslanma18"]:checked').value;
    var value19 = document.querySelector('input[name="radio-hoslanma19"]:checked').value;
    var value20 = document.querySelector('input[name="radio-hoslanma20"]:checked').value;
    var value21 = document.querySelector('input[name="radio-hoslanma21"]:checked').value;
    var value22 = document.querySelector('input[name="radio-hoslanma22"]:checked').value;
    var value23 = document.querySelector('input[name="radio-hoslanma23"]:checked').value;
    var value24 = document.querySelector('input[name="radio-hoslanma24"]:checked').value;
    var valueO = document.querySelector('input[name="radio-hoslanma-ö"]:checked').value;
    var value25 = document.querySelector('input[name="radio-hoslanma25"]:checked').value;
    var value26 = document.querySelector('input[name="radio-hoslanma26"]:checked').value;
    var value27 = document.querySelector('input[name="radio-hoslanma27"]:checked').value;
    var value28 = document.querySelector('input[name="radio-hoslanma28"]:checked').value;
    var value29 = document.querySelector('input[name="radio-hoslanma29"]:checked').value;
    var value30 = document.querySelector('input[name="radio-hoslanma30"]:checked').value;
    


    fetch("http://localhost:8080/api/survey/hoslanti", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,value7,value8,value9,value10,value11,value12,value13,value14,value15,
        value16,value17,value18,value19,value20,value21,value22,value23,value24,valueO,
        value25,value26,value27,value28,value29,value30,value31,value32,value33,value34,
        value35,value36,value37,value38,value39,value40
      }),
    })
      .then((response) => response.json())
      .then((response) => returnResults(response))
      .catch((error) => {
        console.log(error);
      });

      var value1y = document.querySelector('input[name="radio-yapabilirlik1"]:checked').value;
      var value2y = document.querySelector('input[name="radio-yapabilirlik2"]:checked').value;
      var value3y = document.querySelector('input[name="radio-yapabilirlik3"]:checked').value;
      var value4y = document.querySelector('input[name="radio-yapabilirlik4"]:checked').value;
      var value5y = document.querySelector('input[name="radio-yapabilirlik5"]:checked').value;
      var value6y = document.querySelector('input[name="radio-yapabilirlik6"]:checked').value;
      var value7y = document.querySelector('input[name="radio-yapabilirlik7"]:checked').value;
      var value8y = document.querySelector('input[name="radio-yapabilirlik8"]:checked').value;
      var value9y = document.querySelector('input[name="radio-yapabilirlik9"]:checked').value;
      var value10y = document.querySelector('input[name="radio-yapabilirlik10"]:checked').value;
      var value11y = document.querySelector('input[name="radio-yapabilirlik11"]:checked').value;
      var value12y = document.querySelector('input[name="radio-yapabilirlik12"]:checked').value;
      var value13y = document.querySelector('input[name="radio-yapabilirlik13"]:checked').value;
      var value14y = document.querySelector('input[name="radio-yapabilirlik14"]:checked').value;
      var value15y = document.querySelector('input[name="radio-yapabilirlik15"]:checked').value;
      var value16y = document.querySelector('input[name="radio-yapabilirlik16"]:checked').value;
      var value17y = document.querySelector('input[name="radio-yapabilirlik17"]:checked').value;
      var value18y = document.querySelector('input[name="radio-yapabilirlik18"]:checked').value;
      var value19y = document.querySelector('input[name="radio-yapabilirlik19"]:checked').value;
      var value20y = document.querySelector('input[name="radio-yapabilirlik20"]:checked').value;
      var value21y = document.querySelector('input[name="radio-yapabilirlik21"]:checked').value;
      var value22y = document.querySelector('input[name="radio-yapabilirlik22"]:checked').value;
      var value23y = document.querySelector('input[name="radio-yapabilirlik23"]:checked').value;
      var value24y = document.querySelector('input[name="radio-yapabilirlik24"]:checked').value;
      var valueOy = document.querySelector('input[name="radio-yapabilirlik-ö"]:checked').value;
      var value25y = document.querySelector('input[name="radio-yapabilirlik25"]:checked').value;
      var value26y = document.querySelector('input[name="radio-yapabilirlik26"]:checked').value;
      var value27y = document.querySelector('input[name="radio-yapabilirlik27"]:checked').value;
      var value28y = document.querySelector('input[name="radio-yapabilirlik28"]:checked').value;
      var value29y = document.querySelector('input[name="radio-yapabilirlik29"]:checked').value;
      var value30y = document.querySelector('input[name="radio-yapabilirlik30"]:checked').value;
      
    
    
      fetch("http://localhost:8080/api/survey/yapabilirlik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          userId,
          value1y,
          value2y,
          value3y,
          value4y,
          value5y,
          value6y,value7y,value8y,value9y,value10y,value11y,value12y,value13y,value14y,value15y,
          value16y,value17y,value18y,value19y,value20y,value21y,value22y,value23y,value24y,valueOy,
          value25y,value26y,value27y,value28y,value29y,value30y,value31y,value32y,value33y,value34y,
          value35y,value36y,value37y,value38y,value39y,value40y
        }),
      })
        .then((response) => response.json())
        .then((response) => returnResults(response))
        .catch((error) => {
          console.log(error);
        });

    //}

  //else{
   // alert("Lütfen soruları dikkatli okuyunuz!");
  //}

}
function goToDescription(){
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var sex = document.querySelector('input[name="radio-sex"]:checked').value;
  var scoreType1 = document.querySelector('input[name="radioPersonal1"]:checked').value;
  var scoreType2 = document.querySelector('input[name="radioPersonal2"]:checked').value;
  var dropdown1 = document.getElementById("dropdown1").value;
  var dropdown2 = document.getElementById("dropdown2").value;
  var resultType = document.querySelector('input[name="radioPersonal3"]:checked').value;
  if(name !="" && age !="" && sex !=0 && scoreType1 !=0 && scoreType2 !=0 && dropdown1 !=0 && dropdown2 !=0){
    $('#rumuz').css('display', 'none');
    $('#anket').css('display', 'block');
  }
  else{
    alert("Lütfen tüm alanları doldurunuz.");
  }
  
}

function goToAnket3(){
  $('#anket2').css('display', 'none');$('#anket3').css('display', 'block');
  /*
  var value1 = document.querySelector('input[name="radio-hoslanma1"]:checked').value;
  var value2 = document.querySelector('input[name="radio-hoslanma2"]:checked').value;
  var value3 = document.querySelector('input[name="radio-hoslanma3"]:checked').value;
  var value4 = document.querySelector('input[name="radio-hoslanma4"]:checked').value;
  var value5 = document.querySelector('input[name="radio-hoslanma5"]:checked').value;
  var value6 = document.querySelector('input[name="radio-hoslanma6"]:checked').value;
  var value7 = document.querySelector('input[name="radio-hoslanma7"]:checked').value;
  var value8 = document.querySelector('input[name="radio-hoslanma8"]:checked').value;
  var value9 = document.querySelector('input[name="radio-hoslanma9"]:checked').value;
  var value10 = document.querySelector('input[name="radio-hoslanma10"]:checked').value;
  var value1y = document.querySelector('input[name="radio-yapabilirlik1"]:checked').value;
  var value2y = document.querySelector('input[name="radio-yapabilirlik2"]:checked').value;
  var value3y = document.querySelector('input[name="radio-yapabilirlik3"]:checked').value;
  var value4y = document.querySelector('input[name="radio-yapabilirlik4"]:checked').value;
  var value5y = document.querySelector('input[name="radio-yapabilirlik5"]:checked').value;
  var value6y = document.querySelector('input[name="radio-yapabilirlik6"]:checked').value;
  var value7y = document.querySelector('input[name="radio-yapabilirlik7"]:checked').value;
  var value8y = document.querySelector('input[name="radio-yapabilirlik8"]:checked').value;
  var value9y = document.querySelector('input[name="radio-yapabilirlik9"]:checked').value;
  var value10y = document.querySelector('input[name="radio-yapabilirlik10"]:checked').value;
  if(value1 !=0 && value2 !=0 && value3 !=0 && value4 !=0 && value5 !=0 && value6 !=0 && value7 !=0 && value8 !=0 && value9 !=0 && value10 !=0 && value1y !=0 && value2y !=0 && value3y !=0 && value4y !=0 && value5y !=0 && value6y !=0 && value7y !=0 && value8y !=0 && value9y !=0 && value10y !=0 ){
    $('#anket2').css('display', 'none');$('#anket3').css('display', 'block');
  }
  else{
    alert("Lütfen maddeleri işaretleyiniz!");
  }*/
}
function goToAnket4(){
  $('#anket3').css('display', 'none');$('#anket4').css('display', 'block');
  /*
    var value11 = document.querySelector('input[name="radio-hoslanma11"]:checked').value;
    var value12 = document.querySelector('input[name="radio-hoslanma12"]:checked').value;
    var value13 = document.querySelector('input[name="radio-hoslanma13"]:checked').value;
    var value14 = document.querySelector('input[name="radio-hoslanma14"]:checked').value;
    var value15 = document.querySelector('input[name="radio-hoslanma15"]:checked').value;
    var value16 = document.querySelector('input[name="radio-hoslanma16"]:checked').value;
    var value17 = document.querySelector('input[name="radio-hoslanma17"]:checked').value;
    var value18 = document.querySelector('input[name="radio-hoslanma18"]:checked').value;
    var value19 = document.querySelector('input[name="radio-hoslanma19"]:checked').value;
    var value20 = document.querySelector('input[name="radio-hoslanma20"]:checked').value;
    var value11y = document.querySelector('input[name="radio-yapabilirlik11"]:checked').value;
    var value12y = document.querySelector('input[name="radio-yapabilirlik12"]:checked').value;
    var value13y = document.querySelector('input[name="radio-yapabilirlik13"]:checked').value;
    var value14y = document.querySelector('input[name="radio-yapabilirlik14"]:checked').value;
    var value15y = document.querySelector('input[name="radio-yapabilirlik15"]:checked').value;
    var value16y = document.querySelector('input[name="radio-yapabilirlik16"]:checked').value;
    var value17y = document.querySelector('input[name="radio-yapabilirlik17"]:checked').value;
    var value18y = document.querySelector('input[name="radio-yapabilirlik18"]:checked').value;
    var value19y = document.querySelector('input[name="radio-yapabilirlik19"]:checked').value;
    var value20y = document.querySelector('input[name="radio-yapabilirlik20"]:checked').value;
  if(value11 !=0 && value12 !=0 && value13 !=0 && value14 !=0 && value15 !=0 && value16 !=0 && value17 !=0 && value18 !=0 && value19 !=0 && value20 !=0 && value11y !=0 && value12y !=0 && value13y !=0 && value14y !=0 && value15y !=0 && value16y !=0 && value17y !=0 && value18y !=0 && value19y !=0 && value20y !=0 ){
    $('#anket3').css('display', 'none');$('#anket4').css('display', 'block');
  }
  else{
    alert("Lütfen maddeleri işaretleyiniz!");
  }*/
}

function goToAnket5(){
  $('#anket4').css('display', 'none');$('#anket5').css('display', 'block');
  /*
  var value21 = document.querySelector('input[name="radio-hoslanma21"]:checked').value;
  var value22 = document.querySelector('input[name="radio-hoslanma22"]:checked').value;
  var value23 = document.querySelector('input[name="radio-hoslanma23"]:checked').value;
  var value24 = document.querySelector('input[name="radio-hoslanma24"]:checked').value;
  var value25 = document.querySelector('input[name="radio-hoslanma25"]:checked').value;
  var value26 = document.querySelector('input[name="radio-hoslanma26"]:checked').value;
  var value27 = document.querySelector('input[name="radio-hoslanma27"]:checked').value;
  var value28 = document.querySelector('input[name="radio-hoslanma28"]:checked').value;
  var value29 = document.querySelector('input[name="radio-hoslanma29"]:checked').value;
  var value30 = document.querySelector('input[name="radio-hoslanma30"]:checked').value;
  var value21y = document.querySelector('input[name="radio-yapabilirlik21"]:checked').value;
  var value22y = document.querySelector('input[name="radio-yapabilirlik22"]:checked').value;
  var value23y = document.querySelector('input[name="radio-yapabilirlik23"]:checked').value;
  var value24y = document.querySelector('input[name="radio-yapabilirlik24"]:checked').value;
  var value25y = document.querySelector('input[name="radio-yapabilirlik25"]:checked').value;
  var value26y = document.querySelector('input[name="radio-yapabilirlik26"]:checked').value;
  var value27y = document.querySelector('input[name="radio-yapabilirlik27"]:checked').value;
  var value28y = document.querySelector('input[name="radio-yapabilirlik28"]:checked').value;
  var value29y = document.querySelector('input[name="radio-yapabilirlik29"]:checked').value;
  var value30y = document.querySelector('input[name="radio-yapabilirlik30"]:checked').value;
  var valueO = document.querySelector('input[name="radio-hoslanma-ö"]:checked').value;
  var valueOy = document.querySelector('input[name="radio-yapabilirlik-ö"]:checked').value;
  if(valueO==4 && valueOy==4 && value21 !=0 && value22 !=0 && value23 !=0 && value24 !=0 && value25 !=0 && value26 !=0 && value27 !=0 && value28 !=0 && value29 !=0 && value30 !=0 && value21y !=0 && value22y !=0 && value23y !=0 && value24y !=0 && value25y !=0 && value26y !=0 && value27y !=0 && value28y !=0 && value29y !=0 && value30y !=0 ){
    $('#anket4').css('display', 'none');$('#anket5').css('display', 'block');
  }
  else{
    alert("Lütfen soruları dikkatli okuyunuz!");
  }*/

}

function returnResults(response) {


}
