import { ItemsContext } from "@/context/ItemsContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Text, View, FlatList, Pressable, StyleSheet } from "react-native";

export default function Index() {
	const { items } = useContext(ItemsContext);
	const router = useRouter();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
			}}>
			<FlatList
				style={{ paddingVertical: 12.5, paddingHorizontal: 12.5 }}
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Pressable
						onPressOut={() => router.push(`/${item.id}`)}
						style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
						<Text style={styles.text}>{item.title}</Text>
						<Text style={styles.text}>{">"}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: 60,
		borderRadius: 8,
		backgroundColor: "#f05543",
		paddingHorizontal: 10,
		marginBottom: 12.5,
	},
	buttonPressed: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: 60,
		borderRadius: 8,
		backgroundColor: "#f86d5d",
		paddingHorizontal: 10,
		marginBottom: 12.5,
		transform: [{ scale: 1.01 }],
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		letterSpacing: 0.15,
		color: "white",
	},
});
