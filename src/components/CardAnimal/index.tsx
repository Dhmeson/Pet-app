import { View, Image } from "react-native";

import { Icon } from "../Icon";
import { useNavigation } from "@react-navigation/native";

import { RowInformation } from "./RowInformation";
import { styles } from "./styles";
import { usePetContext } from "../../context/Pet.Context";
import { routerProps } from "../../types/routes";
import { evenOrOdd } from "../../utils/evenOrOdd";
import Colors from "../../constants/Colors";

const img = require("../../../assets/images/animals/dog1.png");

interface props {
	bgId: number;
}
interface AnimalProps extends props {}
export function CardAnimal({ bgId }: AnimalProps) {
	const { navigate } = useNavigation<routerProps>();
	const { setId } = usePetContext();
	const showPetInfo = () => {
		setId("1233");
		navigate("petProfile");
	};

	const backgroundColor = evenOrOdd(bgId) == "even" ? Colors.gray100 : Colors.blue;
	return (
		<View style={{ flexDirection: "row", flex: 1 }}>
			<View style={styles.imageConteiner}>
				<Image style={[styles.image, { backgroundColor }]} source={img}></Image>
			</View>
			<View style={styles.describeConteiner}>
				<RowInformation name='paw' text='nome' />
				<RowInformation name='birthday-cake' text='5 anos' />
				<RowInformation name='balance-scale' text='10 kg' />
				<RowInformation name='venus-mars' text='macho' />
			</View>
			<View style={styles.editConteiner}>
				<Icon name='eye' size={40} color='black' onPress={showPetInfo}></Icon>
				<Icon name='trash' color='black' size={40}></Icon>
			</View>
		</View>
	);
}
