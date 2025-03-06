// Unit conversion factors
const conversionFactors = {
    length: { meter: 1, kilometer: 0.001, centimeter: 100, inch: 39.3701, foot: 3.28084 },
    weight: { kilogram: 1, gram: 1000, pound: 2.20462, ounce: 35.274 },
    force: { newton: 1, kilonewton: 0.001, dyne: 100000, poundForce: 0.224809 },
    pressure: { pascal: 1, bar: 0.00001, psi: 0.000145038, atmosphere: 0.0000098692 }
};

// Populate unit dropdowns based on selection
document.getElementById("quantityType").addEventListener("change", function () {
    let type = this.value;
    let fromUnit = document.getElementById("fromUnit");
    let toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    for (let unit in conversionFactors[type]) {
        fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    }
});

// Convert units
function convertUnits() {
    let type = document.getElementById("quantityType").value;
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    let result = (inputValue / conversionFactors[type][fromUnit]) * conversionFactors[type][toUnit];
    document.getElementById("result").innerText = result.toFixed(4) + " " + toUnit;
}

// Initialize dropdowns on page load
document.getElementById("quantityType").dispatchEvent(new Event("change"));
