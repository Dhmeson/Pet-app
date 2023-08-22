import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextStyle } from "react-native";
import { iconColors } from "../types/styles";

interface props {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: iconColors;
	size?: number;
	style?: TextStyle;
	onPress?: () => void;
}
export function Icon({ ...props }: props) {
	const { onPress } = props;
	return <FontAwesome size={props.size ?? 18} {...props} onPress={() => (onPress ? onPress() : null)} />;
}
