import { View, StyleSheet } from "react-native";
import { Button } from "./Button";
import Colors from "../constants/Colors";

export default function ConnectWithProviders() {
	return (
		<View style={styles.conteinerButtons}>
			<Button.Root width={"100%"} borderRadius={10} padding={10} backgroundColor={Colors.blue}>
				<Button.Icon name='google' color='white' size={24}></Button.Icon>
				<Button.Text color={"white"} text='Login com Google' fontSize={18} textTransform='uppercase'></Button.Text>
			</Button.Root>
		</View>
	);
}
const styles = StyleSheet.create({
	conteinerButtons: {
		flexDirection: "column",
		width: "100%",
		paddingLeft: 50,
		paddingRight: 50,
		gap: 15,
	},
});
