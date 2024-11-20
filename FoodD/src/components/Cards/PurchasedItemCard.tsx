import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  describe: string;
  img: any;
  price: number;
  category: string;
  onDelete: () => void; // Add this prop
};

const PurchasedItemCard = ({
  name,
  describe,
  img,
  price,
  category,
  onDelete,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={img} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.describe}>{describe}</Text>
          <Text style={styles.price}>Giá: {price} VND</Text>
          <Text style={styles.category}>Đồ ăn: {category}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default PurchasedItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 8,
  },
  card: {
    flexDirection: "row",
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  describe: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: "red",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
