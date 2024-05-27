import { Pressable, StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

export default function ItemCard({ item, deleteItem, editItem }) {
	const { height, width } = useWindowDimensions();
	const { title, id, content } = item;

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				borderRadius: 8,
				marginTop: 12.5,
				paddingVertical: 30,
				backgroundColor: "#6d9ac3",
				width: width - 25,
				maxHeight: height - height / 3,
				justifyContent: "space-between",
			}}>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					paddingHorizontal: 30,
				}}>
				<Text style={item.isDone ? styles.headerDone : styles.header}>{title}</Text>
				<Text style={item.isDone ? styles.textDone : styles.text}>{content}</Text>
			</View>
			<View>
				{item.isDone ? (
					<Pressable
						onPressOut={() => editItem(id, title, content, false, item.creationDate)}
						style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
						<Text style={styles.text}>DONE</Text>
						<Entypo name="check" size={24} color="white" />
					</Pressable>
				) : (
					<Pressable
						onPressOut={() => editItem(id, title, content, true, item.creationDate)}
						style={({ pressed }) => [pressed ? styles.buttonPressed : styles.buttonNotDone]}>
						<Text style={styles.textNotDone}>MARK AS DONE</Text>
						<Entypo name="check" size={24} color="rgba(0,0,0,0.3)" />
					</Pressable>
				)}
			</View>
			<View>
				<Pressable
					onPressOut={() => deleteItem(id)}
					style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
					<Text style={styles.text}>DELETE</Text>
					<FontAwesome6 name="chevron-right" size={16} color="white" />
				</Pressable>
			</View>
			<View>
				<Text style={styles.status}>CREATED {item.creationDate}</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
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
	buttonNotDone: {
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
		borderColor: "#8dadcd",
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
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginBottom: 12.5,
		letterSpacing: 0.15,
	},
	headerDone: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
		color: "rgba(225,225,225, 0.3)",
		marginBottom: 12.5,
		letterSpacing: 0.15,
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		letterSpacing: 0.15,
	},
	textNotDone: {
		fontSize: 18,
		fontWeight: "bold",
		color: "rgba(0,0,0,0.3)",
		letterSpacing: 0.15,
	},
	textDone: {
		fontSize: 18,
		fontWeight: "bold",
		color: "rgba(225,225,225, 0.3)",
		letterSpacing: 0.15,
	},
	status: {
		marginTop: 12.5,
		fontSize: 10,
		fontWeight: "bold",
		color: "rgba(225,225,225, 0.9)",
		letterSpacing: 0.2,
	},
});
