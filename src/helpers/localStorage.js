import _ from "lodash"

export const setLocalStorageItem = (key, value, force = false) => {
	if (typeof window.localStorage !== "undefined") {
		try {
			localStorage.setItem(key, value)
		} catch (err) {
			console.log("localStorage quota exceeded.")
			if (force) {
				try {
					localStorage.setItem(key, value)
				} catch (err) {
					console.log("localStorage quota exceeded after force.")
				}
			}
		}
	}
}

export const removeLocalStorageItem = (startWith) => {
	if (typeof localStorage !== "undefined") {
		if (startWith) {
			_.forIn(localStorage, (value, objKey) => {
				if (true === _.startsWith(objKey, startWith)) {
					localStorage.removeItem(objKey)
				}
			})
		}
	}
}
