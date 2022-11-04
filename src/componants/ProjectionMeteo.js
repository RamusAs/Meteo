import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native"
import moment from "moment"

export const ProjectionMeteo = ({ data, loading }) => {
	const navigation = useNavigation()
  const { params } = useRoute()
  const city = params?.city

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				navigation.navigate("HourlyDetail", { city, date: data.date })
			}
		>
			{!loading && (
				<>
					<View style={styles.block}>
						<Text style={styles.text}>
							{moment(data.date).format("YYYY-MM-DD") ===
							moment().add(1, "days").format("YYYY-MM-DD")
								? "Demain"
								: moment(data.date).format("DD MMM")}
						</Text>
						<Image
							resizeMode="cover"
							source={{ uri: data?.icon }}
							style={styles.tinyLogo}
						/>
					</View>
					<View
						style={{
							alignItems: "right",
							justifyContent: "space-between",
						}}
					>
						<Text>
							<Text>Min :</Text>
							<Text style={styles.text}>
								{data?.temperature.min + data?.temperature.unit}
							</Text>
						</Text>
						<Text>
							<Text>Max :</Text>
							<Text style={styles.text}>
								{data?.temperature.max + data?.temperature.unit}
							</Text>
						</Text>
					</View>
				</>
			)}
			{loading && <Text>Loading...</Text>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		padding: "5%",
		width: "100%",
		borderRadius: 5,
		marginVertical: 5,
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
