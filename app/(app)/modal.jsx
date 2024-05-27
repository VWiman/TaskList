import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from "react-native";
import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { ItemsContext } from "@/context/ItemsContext";
import { FontAwesome6 } from "@expo/vector-icons";

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
				backgroundColor: "#cddbea",
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
					backgroundColor: "#6d9ac3",
					justifyContent: "space-between",
				}}>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						paddingHorizontal: 30,
					}}>
					<Text style={styles.header}>Title</Text>
					<View>
						<TextInput
							selectionColor={"white"}
							placeholderTextColor={"rgba(225,225,225,0.3)"}
							style={styles.input}
							placeholder="Title"
							value={title}
							onChangeText={setTitle}
							maxLength={30}
						/>
					</View>
					<Text style={styles.header}>Description</Text>
					<View>
						<TextInput
							selectionColor={"white"}
							placeholderTextColor={"rgba(225,225,225,0.3)"}
							style={styles.input}
							placeholder="Description"
							value={content}
							onChangeText={setContent}
							maxLength={400}
						/>
					</View>
				</View>

				<Pressable
					onPressOut={() => handleAddItem()}
					style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
					<Text style={styles.text}>ADD TASK</Text>
					<FontAwesome6 name="chevron-right" size={16} color="white" />
				</Pressable>
			</View>

			{!isPresented && <Link href="../">Back</Link>}
		</View>
	);
}
const styles = StyleSheet.create({
	input: {
		height: 60,
		minWidth: "100%",
		maxWidth: "100%",
		borderRadius: 8,
		borderColor: "rgba(255,255,255,0.4)",
		borderWidth: 2,
		marginBottom: 12.5,
		paddingHorizontal: 8,
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
		backgroundColor: "rgba(0,0,0,0.1)",
		overflow: "hidden",
	},
	button: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "80%",
		maxHeight: 60,
		borderRadius: 8,
		backgroundColor: "#396590",
		paddingHorizontal: 22,
		marginBottom: 12.5,
		borderColor: "white",
		borderWidth: 2,
		shadowOpacity: 0.15,
		elevation: 2,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 13 },
	},
	buttonPressed: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "80%",
		maxHeight: 60,
		borderRadius: 8,
		backgroundColor: "#4b7fac",
		paddingHorizontal: 22,
		marginBottom: 12.5,
		transform: [{ scale: 0.995 }],
		borderColor: "white",
		borderWidth: 2,
		shadowOpacity: 0.1,
		elevation: 0,
		shadowRadius: 8,
		shadowOffset: { width: 1, height: 13 },
	},
	header: {
		fontSize: 19,
		fontWeight: "bold",
		color: "white",
		marginBottom: 12.5,
		letterSpacing: 0.15,
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		letterSpacing: 0.15,
	},
});
