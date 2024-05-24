import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { ItemsContext } from "@/context/ItemsContext";
import ItemCard from "../../../components/ItemCard";
import { StyleSheet, View } from "react-native";

export default function Index() {
	const { id } = useLocalSearchParams();
	const { items, deleteItem } = useContext(ItemsContext);
	const item = items.find((item) => item.id === parseInt(id));

	return (
		<View style={styles.itemCard}>
			<ItemCard item={item} deleteItem={deleteItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	itemCard: { flex: 1,  alignItems: "center", backgroundColor: "white" },
});
