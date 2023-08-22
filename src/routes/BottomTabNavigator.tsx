import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { iconColors, tabBottomOptions } from "../types/styles";
import { RoutesPets } from "./RoutesPets";
import { HomePage } from "../screens/DashBoard/HomePage";
import { Shop } from "../screens/DashBoard/shop";

const Tab = createBottomTabNavigator();
const defaultTabIconColor: iconColors = "white";

export default function BottomTabNavigator() {
	const options: tabBottomOptions = {
		tabBarActiveTintColor: "black",
		tabBarLabel: "",
		headerShown: false,
	};

	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarStyle: { backgroundColor: Colors.green200 },
			}}>
			<Tab.Screen
				name='Home'
				component={HomePage}
				options={{
					...options,
					tabBarIcon: ({ color, focused, size }) => <Ionicons name='home' size={size} color={focused ? color : defaultTabIconColor} />,
				}}
			/>
			<Tab.Screen
				name='Pet'
				component={RoutesPets}
				options={{
					...options,
					tabBarIcon: ({ color, focused, size }) => <Ionicons name='paw-sharp' size={size} color={focused ? color : defaultTabIconColor} />,
				}}
			/>
			<Tab.Screen
				name='Shop'
				component={Shop}
				options={{
					...options,
					tabBarIcon: ({ color, focused, size }) => <Ionicons name='people' size={size} color={focused ? color : defaultTabIconColor} />,
				}}
			/>
		</Tab.Navigator>
	);
}
