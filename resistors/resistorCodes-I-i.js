function calculateResistance() {
	var input = document.getElementById("color-input").value.toLowerCase();

	var colorCodes = {
		k: { value: 0, multiplier: 1, tolerance: -1 },
		n: { value: 1, multiplier: 10, tolerance: 1 },
		r: { value: 2, multiplier: 100, tolerance: 2 },
		o: { value: 3, multiplier: 1000, tolerance: -1 },
		y: { value: 4, multiplier: 10000, tolerance: -1 },
		g: { value: 5, multiplier: 100000, tolerance: 0.5 },
		b: { value: 6, multiplier: 1000000, tolerance: 0.25 },
		v: { value: 7, multiplier: 10000000, tolerance: 0.1 },
		e: { value: 8, multiplier: -1, tolerance: -1 },
		w: { value: 9, multiplier: -1, tolerance: -1 },
		s: { value: 0, multiplier: 0.01, tolerance: 10 },
		d: { value: 0, multiplier: 0.1, tolerance: 5 },
	};

	var resultElement = document.getElementById("result");
	var result = "";

	if (input.length === 4 || input.length === 5) {
		var digits = input.substr(0, input.length - 2);
		var multiplier = input[input.length - 2];
		var tolerance = input[input.length - 1];

		var resistance = colorCodes[digits.charAt(0)].value * 10 + colorCodes[digits.charAt(1)].value;
        if(input.length === 5){
            resistance *= 10;
            resistance += colorCodes[digits.charAt(2)].value;
        }
        resistance *=  colorCodes[multiplier].multiplier;

		if (colorCodes[multiplier].multiplier === 0.1 || colorCodes[multiplier].multiplier === 0.01) {
			resistance = resistance.toFixed(1);
		}

		result = "Resistance: " + resistance + " ohms, Tolerance: " + colorCodes[tolerance].tolerance + "%";
	} else {
		result = "";
	}

	resultElement.textContent = result;
}
