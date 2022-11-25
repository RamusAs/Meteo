import { match } from "../../helpers"

test("check if city is in cities list", () => {
	const cities = {
		0: {
			name: "   Aaigem   ",
			npa: "9420",
			region: "",
			country: "BEL",
			url: "aaigem",
		},
		1: {
			name: "absrecc",
			npa: "8511",
			region: "",
			country: "BEL",
			url: "aalbeke",
		},
		2: {
			name: "Aalst",
			npa: "9300",
			region: "",
			country: "BEL",
			url: "aalst",
		},
	}
	expect(match(cities[0])).toBeTruthy()
	expect(match(cities[1])).toBeFalsy()
	expect(match(cities[2])).toBeTruthy()
})
