import { Stack, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";


export default function RootLayout() {
	const router = useRouter();
	const [iconColor, setIconColor] = useState("white");

	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: "#6d9ac3" },
				headerTintColor: "white",
				headerTitleStyle: styles.header,
			}}>
			<Stack.Screen
				name="index"
				options={{
					title: "Task List",
					headerRight: () => (
						<Pressable
							onPressIn={() => setIconColor("#b2c9de")}
							onPressOut={() => {
								setIconColor("white");
								router.push("/modal");
							}}
							style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
							<FontAwesome6 name="plus-square" size={28} color={iconColor} />
						</Pressable>
					),
				}}
			/>
			<Stack.Screen
				name="[id]/index"
				options={{ title: "", headerBackTitle: "Back", headerBackTitleStyle: styles.header }}
			/>
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
		width: 38,
		height: 38,
	},
	buttonPressed: {
		alignItems: "center",
		justifyContent: "center",
		width: 38,
		height: 38,
	},
	header: {
		fontSize: 19,
		fontWeight: "bold",
		letterSpacing: 0.15,
	},
});
