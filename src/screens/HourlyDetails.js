import { useGetHourly } from "../hooks/useGetHourly"
import { HourlyDetailsCard } from "../componants/HourlyDetailsCard"
import { FlatList } from "react-native"
import { useState } from "react"
import { useRoute } from "@react-navigation/native"
import { useTheme } from "../hooks"

export const HourlyDetails = () => {
	const theme = useTheme()

	const { params } = useRoute()
	const { city, date } = params

	const { data, loading } = useGetHourly(city, date, [date])
	const [refreshing, setrefreshing] = useState(false)

	const renderItem = ({ item }) => (
		<HourlyDetailsCard hour={item}></HourlyDetailsCard>
	)

	return (
		<>
			{!loading && (
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item?.hourly?.datetime}
					refreshing={refreshing}
					onRefresh={() => setrefreshing(true)}
				/>
			)}
		</>
	)
}
