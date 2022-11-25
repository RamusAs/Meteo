import { useGetHourly } from "../hooks/useGetHourly"
import { HourlyDetailsCard } from "../componants/HourlyDetailsCard"
import { FlatList } from "react-native"
import { useState } from "react"
import { useRoute } from "@react-navigation/native"

export const HourlyDetails = () => {
	const { params } = useRoute()
	const { city, date } = params
	const { data, loading, refetch } = useGetHourly(city, date, [date])
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
					keyExtractor={(item) => item.datetime}
					refreshing={refreshing}
					onRefresh={() => {
						refetch()
						setrefreshing(true)
						setTimeout(() => {
							setrefreshing(false)
						}, 2000)
					}}
				/>
			)}
		</>
	)
}
