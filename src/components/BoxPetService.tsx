import { View, Text, StyleSheet } from "react-native";
import { Icon } from "./Icon";
import { Button } from "./Button";
import Colors from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { iconColors } from "../types/styles";

interface props {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	backgroundColor: iconColors;
	title: string;
	notification?: string;
}
export function BoxPetService({ name, backgroundColor, title, notification }: props) {
	return (
		<View style={styles.container}>
			<View style={[styles.imageConteiner, { backgroundColor }]}>
				<Icon name={name} color='white' size={30}></Icon>
			</View>
			<View style={{ flex: 1 }}>
				<Text style={styles.textTitle}>{title}</Text>
				<Text style={styles.textDescribe}>{notification}</Text>
			</View>
			<Button.Root width={100} backgroundColor={backgroundColor} padding={10}>
				<Button.Text text='Visualizar' color={"white"}></Button.Text>
			</Button.Root>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 20,
		gap: 5,
		padding: 5,
	},
	imageConteiner: {
		backgroundColor: "#da2c1d",
		padding: 10,
		borderRadius: 50,
	},
	textTitle: {
		fontFamily: "Fredoka",
		fontSize: 21,
	},
	textDescribe: {
		fontFamily: "Fredoka",
		fontSize: 16,
		fontStyle: "italic",
		color: Colors.green,
	},
});
