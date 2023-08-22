import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
const logo = require("../../../assets/images/logo.png");
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import BottomDecoration from "../../components/BottomDecoration";
import ConnectWithProviders from "../../components/ConnectWithProviders";
import { useNavigation } from "@react-navigation/native";
import { routerProps } from "../../types/routes";
import Colors from "../../constants/Colors";

export default function LoginPage() {
	const { navigate } = useNavigation<routerProps>();

	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.logo} source={logo}></Image>
			</View>
			<SafeAreaView style={styles.conteinerInputs}>
				<Input.Root>
					<Input.Icon name='send' color='#949292'></Input.Icon>
					<Input.Field placeholder='Email adress' placeholderTextColor='black'></Input.Field>
				</Input.Root>

				<Input.Root>
					<Input.Icon name='send' color='#949292'></Input.Icon>
					<Input.Field placeholder='Password' placeholderTextColor='black'></Input.Field>
				</Input.Root>

				<Text style={styles.txtRecoverPassword}>Recuperar senha</Text>
			</SafeAreaView>
			<View style={styles.btnLogin}>
				<Button.Root action={() => navigate("DashBoard")} width={"100%"} borderRadius={10} padding={10}>
					<Button.Text color={"white"} text='Login' fontSize={18} textTransform='uppercase'></Button.Text>
				</Button.Root>
			</View>
			<Text style={styles.txt}>Ou Entre com</Text>
			<ConnectWithProviders />
			<View style={styles.conteinerButtons}>
				<Button.Root width={"100%"} borderRadius={10} padding={10} backgroundColor={Colors.blue}>
					<Button.Text color={"white"} text='Criar conta' fontSize={18} textTransform='uppercase'></Button.Text>
				</Button.Root>
			</View>

			<BottomDecoration />
		</View>
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
	txtRecoverPassword: {
		alignSelf: "flex-end",
		color: Colors.green200,
		fontWeight: "600",
		fontSize: 18,
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
	conteinerButtons: {
		flexDirection: "column",
		width: "100%",
		paddingLeft: 50,
		paddingRight: 50,
	},
});
