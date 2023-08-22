import { Image, StyleSheet, View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
const logo = require("../../../assets/images/logo.png");
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import BottomDecoration from "../../components/BottomDecoration";
import ConnectWithProviders from "../../components/ConnectWithProviders";
import { useInfoKeyboard } from "../../hooks/useInfoKeyBoard";
import Colors from "../../constants/Colors";

export default function RegisterPage() {
	const { isOpen } = useInfoKeyboard();
	return (
		<KeyboardAvoidingView
			style={styles.container}
			keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView style={styles.safeArea}>
				<View>
					{!isOpen && <Image style={styles.logo} source={logo}></Image>}
					<Text style={styles.title}>Crie uma conta</Text>
				</View>
				<View style={styles.conteinerInputs}>
					<Input.Root inputStyleType='noBG'>
						<Input.Icon name='envelope' color='#949292'></Input.Icon>
						<Input.Field placeholder='Email adress' placeholderTextColor='black'></Input.Field>
					</Input.Root>

					<Input.Root inputStyleType='noBG'>
						<Input.Icon name='lock' color='#949292'></Input.Icon>
						<Input.Field placeholder='Password' placeholderTextColor='black'></Input.Field>
					</Input.Root>
				</View>
				<View style={styles.btnLogin}>
					<Button.Root width={"100%"} borderRadius={10} padding={10}>
						<Button.Text color={"white"} text='Cadastrar' fontSize={18} textTransform='uppercase'></Button.Text>
					</Button.Root>
				</View>
			</SafeAreaView>
			<Text style={styles.txt}>Ou Entre com</Text>
			<ConnectWithProviders />
			<BottomDecoration />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
		gap: 20,
	},
	logo: {
		backgroundColor: Colors.white,
		width: 150,
		height: 150,
	},
	conteinerInputs: {
		gap: 20,
	},
	title: {
		color: Colors.green200,
		fontWeight: "500",
		fontSize: 24,
	},
	btnLogin: {
		flexDirection: "column",
		width: "100%",
		paddingLeft: 50,
		paddingRight: 50,
	},
	txt: {
		fontSize: 16,
		fontWeight: "500",
		color: Colors.gray150,
	},

	safeArea: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		flexDirection: "column",
		gap: 30,
	},
});
