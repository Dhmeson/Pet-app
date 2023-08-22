import { Image, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const loadingImage = require("../../assets/images/loading-dog.png");
export default function Loading() {
	return (
		<View style={styles.container}>
			<Image source={loadingImage}></Image>
			<Text style={styles.text}>Carregando aguarde ...</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
		gap: 20,
	},
	text: {
		fontSize: 40,
		fontWeight: "400",
		color: Colors.green,
		//fontFamily: "Fredoka",
	},
});
