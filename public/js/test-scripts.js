const array1 = [
  7,
  1,
  7,
  7,
  7,
  1,
  1,
  1,
  2,
  1,
  5,
  1,
  7,
  7,
  7,
  1,
  1,
  1,
  2,
  1,
  5,
  1,
  7,
  7,
  7,
  1,
  1,
  1,
  2,
  1,
  5,
  5,
  7,
  7,
  7,
  1,
  1,
  1,
  2,
  1,
];
const array2 = [
  1,
  1,
  1,
  1,
  7,
  7,
  7,
  7,
  2,
  5,
  1,
  1,
  1,
  1,
  7,
  7,
  7,
  7,
  2,
  5,
  1,
  1,
  1,
  1,
  7,
  7,
  7,
  7,
  2,
  5,
  1,
  1,
  1,
  1,
  7,
  7,
  7,
  7,
  1,
  7,
];
array1.forEach((i,index)=>{
    document.querySelectorAll("input[name=radio-hoslanma"+(index+1)+"]")[i-1].checked = true;
})
array2.forEach((i,index)=>{
    document.querySelectorAll("input[name=radio-yapabilirlik"+(index+1)+"]")[i-1].checked = true;
})
document.querySelectorAll("input[name=radio-hoslanma-ö]")[3].checked = true
document.querySelectorAll("input[name=radio-yapabilirlik-ö]")[3].checked = true

/**
 * Test Scripts
 */
// for(i=1;i<=40;i++){document.querySelectorAll("input[name=radio-hoslanma"+i+"]")[6].checked = true }
// for(i=1;i<=40;i++){document.querySelectorAll("input[name=radio-yapabilirlik"+i+"]")[4].checked = true }
// document.querySelectorAll("input[name=radio-hoslanma-ö]")[3].checked = true

// document.querySelectorAll("input[name=radio-yapabilirlik-ö]")[3].checked = true

// araştırmacı

// cpanel bireysel mini
// sayafaının başlangıç renkleri değişecek
// mavi renk baskın olucak
