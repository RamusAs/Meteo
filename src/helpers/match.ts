import { CITIES } from "../constants"

export const isCity = (city: string): boolean => {
	return Object.values(CITIES).some(
		(c) => c.name.toLowerCase().trim() === city.toLowerCase().trim()
	)
}
