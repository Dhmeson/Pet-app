import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "./src/constants/Colors";
import { getStackOptions } from "./src/utils/getStackOptions";
import BottomTabNavigator from "./src/routes/BottomTabNavigator";

import { RoutesAuth } from "./src/routes/Routes.Auth";
import { PetProvider } from "./src/context/Pet.Context";
import Loading from "./src/components/Loading";
import { CreatePetPage } from "./src/screens/DashBoard/Pet/CreatePetPage";
import { PetProfilePage } from "./src/screens/DashBoard/Pet/PetProfilePage";
import { PetHealth } from "./src/screens/DashBoard/Pet/PetHealth";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
	const options = getStackOptions({ backgroundColor: Colors.green200, headerTintColor: Colors.white, title: "Adicionar Novo Pet" });

	const [fontsLoaded] = Font.useFonts({
		Fredoka: require("./assets/fonts/Fredoka_Condensed-Regular.ttf"),
		FredokaBold: require("./assets/fonts/Fredoka_Expanded-Bold.ttf"),
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<PetProvider>
			<NavigationContainer onReady={onLayoutRootView} fallback={<Loading />}>
				<Stack.Navigator initialRouteName='petHealth'>
					<Stack.Screen name='Auth' component={RoutesAuth} options={{ headerShown: false }} />
					<Stack.Screen name='DashBoard' component={BottomTabNavigator} options={{ headerShown: false }} />
					<Stack.Screen name='NewPet' component={CreatePetPage} options={{ headerShown: true, ...options }} />
					{/* <Stack.Screen name='petProfileTest' component={PetProfilePage} options={{ headerShown: false, ...options }} /> */}
					<Stack.Screen name='petHealth' component={PetHealth} options={{ headerShown: true, ...options }} />
				</Stack.Navigator>
			</NavigationContainer>
		</PetProvider>
	);
}
