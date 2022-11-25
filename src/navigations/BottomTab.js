import { SettingsScreen } from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStack } from "./HomeStack"
import Ionicons from "react-native-vector-icons/Ionicons"
import { light } from "../constants"

export const BottomTab = () => {
	const { colors, icons } = light
	const Tab = createBottomTabNavigator()
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === "Home") {
						iconName = focused ? "ios-home" : "ios-home-outline"
					} else if (route.name === "Settings") {
						iconName = focused ? "ios-settings" : "ios-settings-outline"
					}

					// You can return any component that you like here!
					return (
						<Ionicons
							name={iconName}
							size={size}
							color={color}
						/>
					)
				},
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.gray,
			})}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
			/>
		</Tab.Navigator>
	)
}
