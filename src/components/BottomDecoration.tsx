import { View, Text } from "react-native";
import Colors from "../constants/Colors";

export default function BottomDecoration() {
	return <View style={{ backgroundColor: Colors.green, width: "100%", height: 15, bottom: 0, position: "absolute" }}></View>;
}
