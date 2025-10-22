// Temperature Converter

function convert(){
    const toFahrenheitBtn = document.getElementById("toFahrenheit");
    const toCelsiusBtn = document.getElementById("toCelsius");
    let parag = document.getElementById("result");
    let input = document.getElementById("textBox");
    let temp;
    temp = Number(input.value);


    if(toFahrenheitBtn.checked){
        temp = temp * (9/5) + 32;
        parag.textContent = `${temp.toFixed(2)} °F`;
    }
    else if(toCelsiusBtn.checked){
        temp = (temp -32) / (9/5);
        parag.textContent = `${temp.toFixed(2)} °C`;
    }

    

    

}