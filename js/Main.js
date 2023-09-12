//  Obtiene los valores de los campos de entrada
let num1 =parseFloat(document.getElementById("num1").value);   
let num2 =parseFloat(document.getElementById("num2").value);

function Sumar()
{
    // Verifica que los campos no estén vacíos
    if (isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.")
        return;
    }

    // Realiza la suma
    let suma = num1 + num2;
    suma = suma.toFixed(2)
    // Muestra el resultado en la página con animación
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma de " + num1 + " + " + num2 + " es: "+ suma;
    
    resultadoElement.classList.add("mostrar");
    //Cambia el color de la alerta según el resultado
    if (suma > 10)
    {
        resultadoElement.className = "alert alert-success mostrar";
    }
    else
    {
        resultadoElement.className = "alert alert-danger mostrar";
    }

    resultadoElement.hidden = false;
    getElementById("h3Result").hidden = false;
}

function Restar()
{
    // Verifica que los campos no estén vacíos
    if (isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.")
        return;
    }

    // Realiza la suma
    let resta = num1 - num2;
    resta = resta.toFixed(2)
    // Muestra el resultado en la página con animación
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La resta de " + num1 + " - " + num2 + " es: "+ resta;
    
    resultadoElement.classList.add("mostrar");
    //Cambia el color de la alerta según el resultado
    if (resta > 10)
    {
        resultadoElement.className = "alert alert-success mostrar";
    }
    else
    {
        resultadoElement.className = "alert alert-danger mostrar";
    }

    resultadoElement.hidden = false;
    getElementById("h3Result").hidden = false;
}

function Multiplicar()
{
    // Verifica que los campos no estén vacíos
    if (isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.")
        return;
    }

    // Realiza la suma
    let multiplicar = num1 * num2;
    multiplicar = multiplicar.toFixed(2)
    // Muestra el resultado en la página con animación
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "El producto de " + num1 + " x " + num2 + " es: "+ multiplicar;
    
    resultadoElement.classList.add("mostrar");
    //Cambia el color de la alerta según el resultado
    if (multiplicar > 10)
    {
        resultadoElement.className = "alert alert-success mostrar";
    }
    else
    {
        resultadoElement.className = "alert alert-danger mostrar";
    }

    resultadoElement.hidden = false;
    getElementById("h3Result").hidden = false;
}

function Dividir()
{
    // Verifica que los campos no estén vacíos
    if (isNaN(num1) || isNaN(num2))
    {
        alert("Por favor, ingresa números válidos en ambos campos.")
        return;
    }

    // Realiza la suma
    let división = num1 / num2;
    división = división.toFixed(2)
    // Muestra el resultado en la página con animación
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "El resultado de dividir de " + num1 + " ÷ " + num2 + " es: "+ división;
    
    resultadoElement.classList.add("mostrar");
    //Cambia el color de la alerta según el resultado
    if (división > 10)
    {
        resultadoElement.className = "alert alert-success mostrar";
    }
    else
    {
        resultadoElement.className = "alert alert-danger mostrar";
    }

    resultadoElement.hidden = false;
    getElementById("h3Result").hidden = false;
}
//Agrega un evento click al botón de calcular
let botonSuma = document.getElementById("calcularSumaBtn")
botonSuma.addEventListener("click", Sumar);

let botonResta = document.getElementById("calcularRestaBtn")
botonResta.addEventListener("click", Restar);

let botonProducto = document.getElementById("calcularProductoBtn")
botonProducto.addEventListener("click", Multiplicar);

let botonDivisión = document.getElementById("calcularDivisiónBtn")
botonDivisión.addEventListener("click", Dividir);



document.getElementById("num1").addEventListener('input', () =>{ 
    
    num1 =parseFloat(document.getElementById("num1").value);   
    num2 =parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2))
    {
        botonSuma.disabled = true;
        botonDivisión.disabled = true;
        botonProducto.disabled = true;
        botonResta.disabled = true;
        return;
    }
    else{
        botonSuma.disabled = false;
        botonDivisión.disabled = false;
        botonProducto.disabled = false;
        botonResta.disabled = false;
        return;
    }
})

document.getElementById("num2").addEventListener('input', () =>{
    
    num1 =parseFloat(document.getElementById("num1").value);   
    num2 =parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2))
    {
        botonSuma.disabled = true;
        botonDivisión.disabled = true;
        botonProducto.disabled = true;
        botonResta.disabled = true;
        return;
    }
    else{
        botonSuma.disabled = false;
        botonDivisión.disabled = false;
        botonProducto.disabled = false;
        botonResta.disabled = false;
        return;
    }
})