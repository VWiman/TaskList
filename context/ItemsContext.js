import { useRouter } from "expo-router";
import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
	const router = useRouter();

	const [items, setItems] = useState([]);
	const [counter, setCounter] = useState(1);

	const addItem = (title, content) => {
		const dateString = new Date().toLocaleString();
		const item = { id: counter, title: title, content: content, isDone: false, creationDate: dateString };
		// Add new item to items.
		setItems((prevItems) => [...prevItems, item]);
		setCounter((prevCounter) => prevCounter + 1);
	};
	const deleteItem = (id) => {
		router.back();
		// Delete the item with matching id.
		const updatedItems = items.filter((item) => item.id != id);
		setItems(updatedItems);
	};
	const editItem = (id, title, content, isDone, creationDate) => {
		const updatedItem = { id: id, title: title, content: content, isDone: isDone, creationDate: creationDate };
		// Check each item in items. If id is a match, replace with updatedItem, else keep item.
		const updatedItems = items.map((item) => (item.id === id ? updatedItem : item));
		setItems(updatedItems);
	};

	return <ItemsContext.Provider value={{ items, addItem, deleteItem, editItem }}>{children}</ItemsContext.Provider>;
};
