import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Icon } from "../Icon";
import { styles } from "./styles";
import { iconColors } from "../../types/styles";

interface RowInformationProps {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color?: iconColors;
	size?: number;
	text: string;
}
export function RowInformation({ color, name, size, text }: RowInformationProps) {
	return (
		<View style={styles.row}>
			<Icon name={name} color={color ?? "black"} size={size ?? 18} />
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}
