function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const resultElement = document.getElementById("result");

    if (isNaN(tempInput)) {
        alert("Please enter a valid number.");
        return;
    }

    if (unitSelect === "celsius") {
        const celsius = parseFloat(tempInput);
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
    } else {
        const fahrenheit = parseFloat(tempInput);
        const celsius = (fahrenheit - 32) * 5/9;
        resultElement.textContent = `${fahrenheit} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
    }
}

const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);
