function hitungLuas(){
  var Sisi, Luas;

  Sisi = parseInt(document.getElementById("sisi-luas").value);
  Luas = Sisi * Sisi;
  document.getElementById("one").innerHTML = "L = S x S";
  document.getElementById("two").innerHTML = "L = " + Sisi + " x " + Sisi;
  document.getElementById("luas").innerHTML = "Luas = " + Luas;
}

function  formReset(){
  document.getElementById("resetform").reset();
}

function  formReset2(){
  document.getElementById("resetform2").reset();
}

function hitungKeliling(){
  var Sisi, Keliling;

  Sisi = parseInt(document.getElementById("sisi-keliling").value);
  Keliling = 4 * Sisi;
  document.getElementById("satu").innerHTML = "K = 4 x S";
  document.getElementById("dua").innerHTML = "K = " + 4 + " x " + Sisi;
  document.getElementById("keliling").innerHTML = "Keliling = " + Keliling;
}
