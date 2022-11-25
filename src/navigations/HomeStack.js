import { HomeScreen, CityDetails, HourlyDetails } from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"

const Stack = createNativeStackNavigator()

export const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				style={styles.container}
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Detail"
				component={CityDetails}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="HourlyDetail"
				component={HourlyDetails}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
