import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Box } from "../../components/Box";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../../components/Icon";
import { CardAnimal } from "../../components/CardAnimal";
import { routerProps } from "../../types/routes";
import { evenOrOdd } from "../../utils/evenOrOdd";
import Colors from "../../constants/Colors";

export function PetPage() {
	const { navigate } = useNavigation<routerProps>();

	const animals = [1, 2, 3, 4, 5];
	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity style={styles.addPet} onPress={() => navigate("NewPet")}>
				<Icon name='plus' size={40} color='white' />
				<Text style={styles.textAddPet}>Adicionar Novo Pet</Text>
			</TouchableOpacity>
			{animals.map((index) => {
				return (
					<Box.Root key={uuidv4()} backgroundColor={evenOrOdd(index) == "even" ? Colors.blue : Colors.gray100}>
						<CardAnimal bgId={index} />
					</Box.Root>
				);
			})}
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 10,
		padding: 10,
	},
	addPet: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		gap: 10,
		backgroundColor: Colors.blue,
		borderRadius: 10,
		paddingLeft: 10,
		marginBottom: 10,
		marginTop: 5,
		padding: 5,
	},
	textAddPet: {
		color: Colors.white,
		fontFamily: "Fredoka",
		fontSize: 28,
		width: "70%",
		textAlign: "center",
	},
});
