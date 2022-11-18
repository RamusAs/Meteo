import React, { createContext, useContext } from "react"
import { theme } from "../constants"

export const ThemeContext = createContext({
	theme: theme,
	setTheme: () => {},
})

export const ThemeProvider = ({
	children,
	theme = theme,
	setTheme = () => {},
}) => {
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const { theme } = useContext(ThemeContext)
	return theme
}
