import { Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export default function RootLayout() {

	const router = useRouter()

	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: "#f86d5d" },
				headerTintColor: "#fff",
				headerTitleStyle: styles.header,
			}}>
			<Stack.Screen
				name="index"
				options={{
					title: "Task List",
					headerRight: () => (
						<Pressable
							onPressOut={() => router.push("/modal")}
							style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
							<Text style={styles.text}>+</Text>
						</Pressable>
					),
				}}
			/>
			<Stack.Screen name="[id]/index" options={{ title: "", headerBackTitle: "Back", headerBackTitleStyle: styles.header }} />
			<Stack.Screen
				name="modal"
				options={{
					presentation: "modal",
					title: "Create task",
				}}
			/>
			{/*
			<Stack.Screen name="edit-todo" options={{ title: "Edit taks" }} /> */}
		</Stack>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		width: 25,
		height: 25,
		borderRadius: 8,
		borderColor: "white",
		backgroundColor: "#f05543",
		borderWidth: 2,
	},
	buttonPressed: {
		alignItems: "center",
		justifyContent: "center",
		width: 25,
		height: 25,
		borderRadius: 8,
		borderColor: "white",
		borderWidth: 2,
		backgroundColor: "#f86d5d",
	},
	text: {
		fontSize: 14,
		fontWeight: "bold",
		letterSpacing: 0.15,
		color: "white",
	},
	header: {
		fontSize: 19,
		fontWeight: "bold",
		letterSpacing: 0.15,
	},
});
