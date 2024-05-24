import { Pressable, StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";

export default function ItemCard({ item, deleteItem }) {
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
				backgroundColor: "#f86d5d",
				width: width - 25,
				maxHeight: height - height / 3,
				justifyContent: "space-between",
			}}>
			<View>
				<Text style={styles.header}>{title}</Text>
				<Text style={styles.text}>{content}</Text>
			</View>
			<View>
				<Pressable
					onPressOut={() => deleteItem(id)}
					style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
					<Text style={styles.text}>DELETE</Text>
					<Text style={styles.text}>{">"}</Text>
				</Pressable>
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
		textAlign: "center",
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
