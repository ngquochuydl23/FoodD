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
import { PurchasedItemCard } from "../components/Cards"; // Giả sử bạn có component này
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, routes } from "../utils";
export default function Offers() {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const navigation = useNavigation();
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    api({ type: TypeHTTP.GET, path: "/order/get-all" }).then((res) => {
      if (res.filter((item) => item.status === false).length > 0) {
        setDisplay(true);
      }
      setPurchasedItems(res.filter((item) => item.status === false));
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
  const payment = () => {
    api({ type: TypeHTTP.POST, path: "/order/buy" }).then((res) => {
      navigation.goBack();
      Alert.alert("Thanh toán thành công");
    });
  };
  const handleDelete = (id) => {
    api({ type: TypeHTTP.DELETE, path: `/order/delete/${id}` }).then((res) => {
      setPurchasedItems((prev) => prev.filter((item) => item._id !== id));
      Alert.alert("Xóa thành công");
    });
  };
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
            <PurchasedItemCard
              name={item.name}
              describe={item.describe}
              img={images[item.img]}
              price={item.price}
              category={item.category}
              onDelete={() => handleDelete(item._id)}
            />
          )}
          style={styles.list}
        />
        {display && (
          <View style={styles.paymentContainer}>
            <TouchableOpacity
              onPress={() => payment()}
              style={styles.paymentButton}
            >
              <AppText style={styles.paymentButtonText}>
                THANH TOÁN TẤT CẢ
              </AppText>
            </TouchableOpacity>
          </View>
        )}
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
