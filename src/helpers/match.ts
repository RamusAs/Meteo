import { CITIES } from "../constants"

export const isCity = (city: string): boolean => {
	return Object.values(CITIES).some(
		(city) => city.name.toLowerCase().trim() === city.toLowerCase().trim()
	)
}
