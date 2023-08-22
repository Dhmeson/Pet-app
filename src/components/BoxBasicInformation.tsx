import { View, StyleSheet, Text } from "react-native";
import { Box } from "./Box";
import { Icon } from "./Icon";
import Colors from "../constants/Colors";
import { Button } from "./Button";

interface props {
	isMale: boolean;
}
export function BoxBasicInformation({ isMale }: props) {
	const bgIcon = isMale ? Colors.blue : Colors.pink;
	return (
		<View style={styles.boxConteinerName}>
			<Box.Root height={90} padding={5}>
				<View style={styles.boxName}>
					<Box.Title text='Boneca'></Box.Title>
					<View style={[styles.boxIconName, { backgroundColor: bgIcon }]}>
						<Icon color='white' name={isMale ? "male" : "female"} size={20}></Icon>
					</View>
				</View>
				<View style={styles.boxName}>
					<Box.Title text='bulldog' color={Colors.green200} fontStyle='italic'></Box.Title>
					<Button.Root width={120} height={35} justifyContent='space-between'>
						<Button.Text text='Editar' color={"white"}></Button.Text>
						<Button.Icon name='edit' color='white'></Button.Icon>
					</Button.Root>
				</View>
			</Box.Root>
		</View>
	);
}
const styles = StyleSheet.create({
	boxConteinerName: {
		padding: 10,
	},
	boxName: {
		paddingRight: 10,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
	},
	boxIconName: {
		//backgroundColor: "#F576AC",
		width: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
	boxEditInfo: {
		//backgroundColor: "#F576AC",
		width: 100,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
});
