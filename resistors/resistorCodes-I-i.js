function calculateResistance() {
	var input = document.getElementById("color-input").value.toLowerCase();

	var colorCodes = {
		k: { value: 0, multiplier: 1, tolerance: -1, color: "black" },
		n: { value: 1, multiplier: 10, tolerance: 1, color: "brown" },
		r: { value: 2, multiplier: 100, tolerance: 2, color: "red" },
		o: { value: 3, multiplier: 1000, tolerance: -1, color: "orange" },
		y: { value: 4, multiplier: 10000, tolerance: -1, color: "yellow" },
		g: { value: 5, multiplier: 100000, tolerance: 0.5, color: "green" },
		b: { value: 6, multiplier: 1000000, tolerance: 0.25, color: "blue" },
		v: { value: 7, multiplier: 10000000, tolerance: 0.1, color: "violet" },
		e: { value: 8, multiplier: -1, tolerance: -1, color: "grey" },
		w: { value: 9, multiplier: -1, tolerance: -1, color: "white" },
		s: { value: 0, multiplier: 0.01, tolerance: 10, color: "silver" },
		d: { value: 0, multiplier: 0.1, tolerance: 5, color: "gold" },
	};

	var resultElement = document.getElementById("result");
	var result = "";

	var colorBandsElement = document.getElementById("color-bands");
	var colorBandsHtml = "";

	// Only display something if there is sufficient information entered:
	if (input.length === 4 || input.length === 5) {
		var digits = input.substr(0, input.length - 2); // The last two bands will be the multiplier and tolerance. These are the digits
		var multiplier = input[input.length - 2];
		var tolerance = input[input.length - 1];

        // Set the first two digits:
		var resistance = colorCodes[digits.charAt(0)].value * 10 + colorCodes[digits.charAt(1)].value;
        // Acounting for five bands, move these digits left 1, and insert the third:
		if (input.length === 5) {
			resistance *= 10;
			resistance += colorCodes[digits.charAt(2)].value;
		}
        // And finally, multiply by the multiplier
		resistance *= colorCodes[multiplier].multiplier;

		if (colorCodes[multiplier].multiplier > 1) {
			resistance = resistance.toFixed(1); // toFixed to prevent errors in representation of the decimals
		}

		result = "Resistance: " + resistance + " ohms, Tolerance: " + colorCodes[tolerance].tolerance + "%";

        // Update color display:
		for (var i = 0; i < input.length; i++) {
			var color = colorCodes[input.charAt(i)].color;
			colorBandsHtml += '<div class="color-band" style="background-color: ' + color + '"></div>';
		}
	}

	resultElement.textContent = result;
    colorBandsElement.innerHTML = colorBandsHtml;

}
