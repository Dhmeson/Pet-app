import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { v4 as uuidv4 } from "uuid";

import { Box } from "../../components/Box";
import { BoxAnimal } from "../../components/BoxAnimal";

import { BoxItemShop } from "../../components/BoxItemShop";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "../../components/Icon";

import Colors from "../../constants/Colors";
import { HORIZONTAL_PADDING } from "../../constants/GlobalStyles";
import { AnimalProps } from "../../types/class";
import { routerProps } from "../../types/routes";

const icon = require("../../../assets/images/animals/bg.png");
const icon2 = require("../../../assets/images/animals/bg.png");

export function HomePage() {
	const { navigate } = useNavigation<routerProps>();

	const data: AnimalProps[] = [
		{ id: "1", icon, name: "Xana" },
		{ id: "2", icon: icon2, name: "bilau" },
		{ id: "3", icon, name: "auaua" },
	];
	return (
		<View style={styles.container}>
			<Box.Root marginTop={10} key={uuidv4()}>
				<Box.Title text='Meus pets'></Box.Title>
				<FlatList
					contentContainerStyle={styles.flatListContainer}
					horizontal={true}
					data={data}
					renderItem={({ item }) => <BoxAnimal icon={item.icon} name={item.name} key={item.id} id={item.id} />}
				/>
			</Box.Root>
			<TouchableOpacity style={styles.addPet} onPress={() => navigate("NewPet")}>
				<Icon name='plus' size={40} color='white' />
				<Text style={styles.textAddPet}>Adicionar Novo Pet</Text>
			</TouchableOpacity>
			<Box.Root height={130} key={uuidv4()}>
				<BoxItemShop category='adult' />
			</Box.Root>
			<Box.Root height={130} key={uuidv4()}>
				<BoxItemShop category='adult' />
			</Box.Root>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: Colors.bgDashBoard,
		gap: 12,
		paddingLeft: HORIZONTAL_PADDING,
		paddingRight: HORIZONTAL_PADDING,
	},

	flatListContainer: {
		flexGrow: 1,
		justifyContent: "center",
		gap: 5,
		paddingHorizontal: 10,
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
		padding: 5,
	},
	textAddPet: {
		color: Colors.white,
		fontFamily: "Fredoka",
		fontSize: 24,
		width: "70%",
		textAlign: "center",
	},
});
