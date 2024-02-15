document
  .getElementById("quadraticForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let adentroRaiz = b ** 2 - 4 * a * c;

    if (adentroRaiz < 0) {
      document.getElementById("result").innerHTML = "No hay soluciones reales";
    } else {
      let x1Numerador = -b + Math.sqrt(adentroRaiz);
      let x1Denominador = 2 * a;
      let x1 = x1Numerador / x1Denominador;

      let x2Numerador = -b - Math.sqrt(adentroRaiz);
      let x2Denominador = 2 * a;
      let x2 = x2Numerador / x2Denominador;

      document.getElementById("result").innerHTML =
        "x1 = " + x1.toFixed(0) + ", x2 = " + x2.toFixed(0);
    }
  });
