import { QueryClient, QueryClientProvider } from "react-query"
import { NavigationContainer } from "@react-navigation/native"
import { BottomTab } from "./src/navigations"
import { CustomStatusBar } from "./src/componants"

export default function App() {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<CustomStatusBar />
				<BottomTab />
			</NavigationContainer>
		</QueryClientProvider>
	)
}
