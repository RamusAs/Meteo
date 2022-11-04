import { StyleSheet } from "react-native"
import { Home, CityDetails } from "./src/screens"
import { QueryClient, QueryClientProvider } from "react-query"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HourlyDetails } from "./src/screens/HourlyDetails"

const Stack = createNativeStackNavigator()

export default function App() {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						style={styles.container}
						name="Home"
						component={Home}
						options={{ title: "HOME" }}
					/>
					<Stack.Screen
						name="Detail"
						component={CityDetails}
					/>
					<Stack.Screen
						name="HourlyDetail"
						component={HourlyDetails}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</QueryClientProvider>
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
