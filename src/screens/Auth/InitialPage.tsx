import { Image, StyleSheet, TouchableOpacity, View, Text, StatusBar } from "react-native";
const logo = require("../../../assets/images/logo.png");

import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { routerProps } from "../../types/routes";
import Colors from "../../constants/Colors";

export default function InitialPage() {
	const { navigate } = useNavigation<routerProps>();

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={Colors.blue} barStyle={"light-content"} />

			<View style={styles.logo}>
				<Image source={logo}></Image>
			</View>
			<View style={styles.describes}>
				<Text style={styles.title}>Bem vindo</Text>
				<Text style={styles.sub_title}>Melhor app pro seu pet</Text>
			</View>
			<View style={styles.logo}>
				<Button.Root action={() => navigate("Register")} justifyContent={"space-around"} borderRadius={20} padding={10}>
					<Button.Text color={"white"} marginLeft={10} text='Começar' fontSize={18} textTransform='uppercase'></Button.Text>
					<Button.Icon name='arrow-right' color='white'></Button.Icon>
				</Button.Root>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footer_text}>Ja tem uma conta?</Text>
				<TouchableOpacity onPress={() => navigate("Login")}>
					<Text style={styles.login_text}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.blue,
		gap: 40,
	},
	logo: {
		backgroundColor: Colors.blue,
	},
	describes: {
		backgroundColor: Colors.blue,
		flexDirection: "column",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "black",
		fontFamily: "Fredoka",
	},
	sub_title: {
		fontSize: 22,
		color: Colors.gray,
		fontFamily: "Fredoka",
	},
	footer: {
		backgroundColor: Colors.blue,

		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 10,
	},
	footer_text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "black",
		fontFamily: "Fredoka",
	},
	login_text: {
		fontSize: 16,
		letterSpacing: 1,
		color: Colors.gray,
		fontWeight: "700",
		fontFamily: "Fredoka",
	},
});
/**
 * 
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
 * const [loaded, error] = useFonts({
		Fredoka: require("../assets/fonts/Fredoka_Condensed-Regular.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (loaded) {
			await SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}
 */
