import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialPage from "../screens/Auth/InitialPage";
import LoginPage from "../screens/Auth/LoginPage";
import RegisterPage from "../screens/Auth/RegisterPage";

const Stack = createNativeStackNavigator();

export function RoutesAuth() {
	return (
		<Stack.Navigator initialRouteName='Init'>
			<Stack.Screen name='Init' component={InitialPage} options={{ headerShown: false }} />
			<Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
			<Stack.Screen name='Register' component={RegisterPage} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
