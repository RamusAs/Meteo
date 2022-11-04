import { Image, StyleSheet, Text, View } from "react-native"
import moment from "moment"

export const HourlyDetailsCard = ({ hour }) => {
	return (
		<View style={styles.container}>
			{
				<>
					{
						<View style={styles.block}>
							<Text style={styles.text}>{moment(hour.datetime).format('HH:mm')}</Text>
							<Image
								resizeMode="cover"
								source={{ uri: hour?.icon }}
								style={styles.tinyLogo}
							/>
						</View>
					}
					<View
						style={{
							alignItems: "right",
							justifyContent: "space-between",
						}}
					>
						<Text>
							<Text>Temperature :</Text>
							<Text style={styles.text}>
								{hour?.temperature.value + hour?.temperature.unit}
							</Text>
						</Text>
						<Text>
							<Text>Vent :</Text>
							<Text style={styles.text}>
								{hour?.windSpeed.value + hour?.windSpeed.unit}
							</Text>
						</Text>
						<Text>
							<Text>Humidité :</Text>
							<Text style={styles.text}>
								{hour?.humidity.value + hour?.humidity.unit}
							</Text>
						</Text>
					</View>
				</>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "5%",
		width: "90%",
		height: 120,
		marginHorizontal: 20,
		marginVertical: 5,
		borderRadius: 5,
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	block: {
		alignItems: "left",
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 0.25,
	},
})
