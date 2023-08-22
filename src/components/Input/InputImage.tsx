import FontAwesome from "@expo/vector-icons/FontAwesome";
import { iconColors } from "../../types/styles";

interface props {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: iconColors;
	size?: number;
}
export default function InputImage({ ...props }: props) {
	return <FontAwesome size={props.size ?? 18} style={{ marginBottom: -3, width: 20 }} {...props} />;
}
