import { ItemsContext } from "@/context/ItemsContext";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Text, View, FlatList, Pressable, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Index() {
	const { items } = useContext(ItemsContext);
	const router = useRouter();

	const [undoneItems, setUndoneItems] = useState([]);
	const [doneItems, setDoneItems] = useState([]);

	useEffect(() => {
		const newUndone = items.filter((item) => item.isDone === false);
		setUndoneItems(newUndone);
		const newdone = items.filter((item) => item.isDone === true);
		setDoneItems(newdone);
	}, [items]);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#cddbea",
			}}>
			<FlatList
				ListHeaderComponent={() => <Text style={styles.header}>TO DO</Text>}
				style={{
					paddingVertical: 12.5,
					paddingHorizontal: 12.5,
					height: "50%",
					width: "100%",
				}}
				data={undoneItems}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => {
							router.push(`/${item.id}`);
						}}
						style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
						{item.isDone ? (
							<Text style={styles.textDone}> {item.title}</Text>
						) : (
							<Text style={styles.text}> {item.title}</Text>
						)}
						<FontAwesome6 name="chevron-right" size={16} color="white" />
					</Pressable>
				)}
			/>
			<View style={{ borderColor: "#6d9ac3", borderWidth: 4, width: "100%", zIndex: 100 }}></View>
			<FlatList
				ListHeaderComponent={() => <Text style={styles.header}>DONE</Text>}
				style={{
					paddingVertical: 12.5,
					paddingHorizontal: 12.5,
					height: "50%",
					width: "100%",
				}}
				data={doneItems}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => {
							router.push(`/${item.id}`);
						}}
						style={({ pressed }) => [pressed ? styles.buttonPressed : styles.button]}>
						{item.isDone ? (
							<Text style={styles.textDone}> {item.title}</Text>
						) : (
							<Text style={styles.text}> {item.title}</Text>
						)}
						<FontAwesome6 name="chevron-right" size={16} color="white" />
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
		width: "100%",
		height: 60,
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
		color: "#396590",
		marginBottom: 12.5,
		letterSpacing: 0.15,
		margin: 24,
		textAlign: "left",
		justifyContent: "flex-start",
		width: "80%",
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		letterSpacing: 0.15,
		color: "white",
	},
	textDone: {
		fontSize: 16,
		fontWeight: "bold",
		letterSpacing: 0.15,
		color: "rgba(0,0,0,0.3)",
	},
});
