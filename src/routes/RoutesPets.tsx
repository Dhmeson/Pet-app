import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { tabBottomOptions } from "../types/styles";
import { PetProfilePage } from "../screens/DashBoard/Pet/PetProfilePage";
import { PetPage } from "../screens/DashBoard/PetPage";

const Stack = createNativeStackNavigator();

export function RoutesPets() {
	const options: tabBottomOptions = {
		tabBarActiveTintColor: "black",
		tabBarLabel: "",
		headerShown: false,
	};
	return (
		<Stack.Navigator initialRouteName='myPets'>
			<Stack.Screen name='myPets' component={PetPage} options={{ ...options }} />
			<Stack.Screen name='petProfile' component={PetProfilePage} options={{ ...options }} />
			<Stack.Screen name='petHealth' component={PetProfilePage} options={{ ...options }} />
		</Stack.Navigator>
	);
}
