import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AppText, SafeAreaScreen } from "../components";
import { api, TypeHTTP } from "../utils/api";
import { PurchasedFoodCard } from "../components/Cards"; // Giả sử bạn có component này
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, routes } from "../utils";
export default function Settings() {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    api({ type: TypeHTTP.GET, path: "/order/get-all" }).then((res) => {
      setPurchasedItems(res.filter((item) => item.status === true));
    });
  }, []);
  const images = [
    require("../assets/images/pizza.jpg"),
    require("../assets/images/salmon.jpg"),
    require("../assets/images/cookie.jpg"),
    require("../assets/images/vit-quay-bac-kinh.jpg"),
    require("../assets/images/dimsum-Trung-Quốc.jpg"),
    require("../assets/images/cari-an-do-1.jpg"),
    require("../assets/images/spagetti.jpg"),
    require("../assets/images/banh-chien-samosa-india.jpg"),
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <AppText style={styles.heading}>Các món đã mua</AppText>
        <FlatList
          data={purchasedItems}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <PurchasedFoodCard
              name={item.name}
              describe={item.describe}
              img={images[item.img]}
              price={item.price}
              category={item.category}
            />
          )}
          style={styles.list}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  list: {
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  paymentContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  paymentButton: {
    width: "90%",
    backgroundColor: "green",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
  paymentButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
