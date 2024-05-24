import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from "react-native";
import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { ItemsContext } from "@/context/ItemsContext";

export default function Modal() {
	const isPresented = router.canGoBack();
	const { addItem } = useContext(ItemsContext);
	const [title, setTitle] = useState();
	const [content, setContent] = useState();
	const { height, width } = useWindowDimensions();

	function handleAddItem() {
		addItem(title, content);
		router.back();
	}

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				backgroundColor: "white",
			}}>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					borderRadius: 8,
					marginTop: 12.5,
					paddingVertical: 30,
					width: width - 25,
					maxHeight: height - height / 3,
					backgroundColor: "#f86d5d",
					justifyContent: "space-between",
				}}>
				<View>
					<Text style={styles.header}>Title</Text>
					<TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
					<Text style={styles.header}>Description</Text>
					<TextInput style={styles.input} placeholder="Description" value={content} onChangeText={setContent} />
				</View>

				<Pressable
					onPressOut={() => handleAddItem()}
					style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
					<Text style={styles.text}>Add Task</Text>
					<Text style={styles.text}>{">"}</Text>
				</Pressable>
			</View>

			{!isPresented && <Link href="../">Back</Link>}
		</View>
	);
}
const styles = StyleSheet.create({
	input: {
		height: 60,
		minWidth: "80%",
		borderRadius: 8,
		borderColor: "white",
		borderWidth: 2,
		marginBottom: 12.5,
		paddingHorizontal: 8,
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
		backgroundColor: "#f97e70",
	},
	button: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "80%",
		maxHeight: 60,
		borderRadius: 8,
		backgroundColor: "#f05543",
		paddingHorizontal: 10,
		marginBottom: 12.5,
		borderColor: "white",
		borderWidth: 2,
	},
	buttonPressed: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "80%",
		maxHeight: 60,
		borderRadius: 8,
		backgroundColor: "#f86d5d",
		paddingHorizontal: 10,
		marginBottom: 12.5,
		transform: [{ scale: 1.01 }],
		borderColor: "white",
		borderWidth: 2,
	},
	header: {
		fontSize: 19,
		fontWeight: "bold",
		color: "white",
		marginBottom: 12.5,
		letterSpacing: 0.15,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
		letterSpacing: 0.15,
	},
});
