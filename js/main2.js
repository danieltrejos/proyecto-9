document.getElementById("Form_pesoIdeal").addEventListener("submit", function (event) { 
    
    event.preventDefault();
    
    // Declaracion y captura de variables
    let pesoIdeal, diferenciaPeso, mensajeImc, imc;
    const sexo = document.getElementById("sexo").value;
    const edad = document.getElementById("edad").value;
    const pesoActual = parseFloat(document.getElementById("pesoActual").value);
    const altura = (parseFloat(document.getElementById("altura").value));

    console.log("Sexo: ",sexo,"Edad:", edad, "Peso Actual: ", pesoActual,"Altura: ", altura);

    // calcular imc
    imc = pesoActual * (10000) / (altura * altura);

    // Condicionales
    if (imc < 18.5) {
        mensajeImc = "<span class='badge rounded-pill text-bg-secondary' > Bajo peso </span>";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-success' > Normal </span>";
    } else if (imc >= 25 && imc < 29.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-warning' > Sobrepeso </span>";
    } else if (imc >= 30 && imc < 34.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-warning' > Obesidad tipo 1 </span>";
    } else if (imc >= 35 && imc < 39.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-danger' > Obesidad tipo 2 </span>";
    } else if (imc >= 40 && imc < 49.9) {
        mensajeImc = "<span class='badge rounded-pill text-bg-danger' > Obesidad tipo 3 </span>";
    } else if (imc >= 50 ) {
        mensajeImc = "<span class='badge rounded-pill text-bg-danger' > Obesidad tipo 4 </span>";
    }
    
    // Calculo del peso ideal
    if (sexo == "Masculino") {
        pesoIdeal = (altura - 100) - ((altura - 150)/4);
    } else if (sexo == "Femenino") {
        pesoIdeal = (altura - 100) - ((altura - 150)/2);
    }

    diferenciaPeso = pesoActual - pesoIdeal;
    
    // Validacion del mensaje de diferencia

    if (diferenciaPeso>0) {
        mensajeDiferencia= `Deberias perder:<span class="badge text-bg-danger">${diferenciaPeso.toFixed(2)} Kg</span> `
    }else{
        mensajeDiferencia= `Deberias ganar:<span class="badge text-bg-success">${(-1)*diferenciaPeso.toFixed(2)} Kg</span> `
    }

    // Mensaje de salida
    mensaje =`<strong>Resultado:</strong><br>Edad:${edad} años<br>Peso actual: ${pesoActual} kg<br>Altura:${altura} cm <br>IMC: ${imc.toFixed(2)} ${mensajeImc} <br> Peso Ideal: <span class="badge text-bg-info">${pesoIdeal} kg</span> <br> ${mensajeDiferencia} `;
    document.getElementById("resultado").innerHTML=  `<div class="alert alert-info" role="alert">${mensaje}</div> ` ;

});