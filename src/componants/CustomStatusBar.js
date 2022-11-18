import React, { useState } from "react"
import { StatusBar } from "react-native"

const STYLES = ["dark-content", "light-content"]
const TRANSITIONS = ["fade", "slide", "none"]

export const CustomStatusBar = () => {
	const [hidden, setHidden] = useState(false)
	const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0])
	const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0])

	return (
		<StatusBar
			animated={true}
			backgroundColor="#61dafb"
			barStyle={statusBarStyle}
			showHideTransition={statusBarTransition}
			hidden={hidden}
		/>
	)
}
