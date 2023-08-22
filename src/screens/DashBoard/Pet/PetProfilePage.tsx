import { View, Text, StyleSheet, ImageBackground, StatusBar, ScrollView } from "react-native";
import { BoxBasicInformation } from "../../../components/BoxBasicInformation";
import { BoxUniqueField } from "../../../components/BoxUniqueField";
import { Icon } from "../../../components/Icon";
import { BoxPetService } from "../../../components/BoxPetService";
import { v4 as uuidv4 } from "uuid";
const imageSource = require("../../../../assets/images/animals/bg.png");
export function PetProfilePage() {
	///const { id } = usePetContext();
	return (
		<ScrollView style={styles.container}>
			<StatusBar hidden={true} />

			<BackGroundImage />
			<BoxBasicInformation isMale={true} />
			<View style={{ flexDirection: "column", flex: 1, padding: 10, width: "100%", justifyContent: "space-between", marginBottom: 10 }}>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
					<Icon name='paw' color='black' size={30}></Icon>
					<Text style={styles.text}>Sobre ela</Text>
				</View>
				<View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
					<BoxUniqueField describe='Idade' value='10 Anos' key={uuidv4()} />
					<BoxUniqueField describe='Peso' value='10 KG' key={uuidv4()} />
					<BoxUniqueField describe='Altura' value='1.1 M' key={uuidv4()} />
					<BoxUniqueField describe='Raça' value='PitBull' key={uuidv4()} />
				</View>
				<BoxPetService backgroundColor='#da2c1d' name='heart' title='Saude Pet' notification='Ultima vacina ha 1 mes' key={uuidv4()} />
				<BoxPetService backgroundColor='#949292' name='shopping-bag' title='Loja Pet' key={uuidv4()} />
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	imageBackground: {
		width: "100%",
		resizeMode: "contain",
		height: 250,
	},
	text: {
		fontFamily: "Fredoka",
		fontSize: 26,
	},
});
function BackGroundImage() {
	return <ImageBackground source={imageSource} style={styles.imageBackground} />;
}
