import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
interface props extends NativeStackNavigationOptions {
	backgroundColor: string;
	headerTintColor: string;
	title: string;
}
export function getStackOptions({ backgroundColor, headerTintColor, title, ...props }: props) {
	const options: NativeStackNavigationOptions = {
		headerStyle: {
			backgroundColor,
		},
		title,
		headerTintColor,
		...props,
		//statusBarColor: Colors.blue,
	};
	return options;
}
