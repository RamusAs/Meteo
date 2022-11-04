import { useGetHourly } from "../hooks/useGetHourly"
import { HourlyDetailsCard } from "../componants/HourlyDetailsCard"
import { FlatList } from "react-native"
import { useState } from "react"
import { useRoute } from "@react-navigation/native"

export const HourlyDetails = () => {

	const { params } = useRoute()
	const {city, date} = params

	const { data, loading } = useGetHourly(city, date, [date])
	console.log('here',data)
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
					keyExtractor={(item) => item}
					refreshing={refreshing}
					onRefresh={() => setrefreshing(true)}
				/>
			)}
		</>
	)
}
