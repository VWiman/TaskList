import { Slot } from "expo-router";
import { ItemsProvider } from "../context/ItemsContext";

export default function RootLayout() {
	return (
		<ItemsProvider>
			<Slot />
		</ItemsProvider>
	);
}
