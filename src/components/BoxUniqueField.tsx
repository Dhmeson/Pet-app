import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
interface props {
	describe: string;
	value: string;
}
export function BoxUniqueField({ describe, value }: props) {
	return (
		<View style={styles.container}>
			<Text style={styles.textValue}>{describe}</Text>
			<Text style={styles.text}>{value}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		height: 50,
		backgroundColor: Colors.gray100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 4,
	},
	text: {
		color: Colors.gray150,
		fontFamily: "Fredoka",
		fontSize: 16,
		fontStyle: "italic",
		fontWeight: "600",
	},
	textValue: {
		color: Colors.gray150,
		fontFamily: "Fredoka",
		fontSize: 16,
		fontWeight: "600",
	},
});
