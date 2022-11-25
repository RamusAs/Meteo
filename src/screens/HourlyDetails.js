import { useGetHourly } from "../hooks/useGetHourly"
import { HourlyDetailsCard } from "../componants/HourlyDetailsCard"
import { FlatList } from "react-native"
import { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"

export const HourlyDetails = () => {
	const { params } = useRoute()
	const { city, date } = params

	const { data, loading, isSuccess, refetch } = useGetHourly(city, date, [date])
	const [refreshing, setrefreshing] = useState(false)

	useEffect(() => {
		if (refreshing) {
			refetch()
		}
		if (isSuccess) setrefreshing(false)
	}, [refreshing])

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
