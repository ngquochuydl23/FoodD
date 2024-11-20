import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { RestaurantCard } from "../components/Cards";
import { COLORS, routes } from "../utils";
import { api, TypeHTTP } from "../utils/api";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [foodSearch, setFoodSearch] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    api({ type: TypeHTTP.GET, path: "/food/get-all" }).then((res) => {
      setFoods(res);
      setFoodSearch(res);
    });
  }, []);
  const handleSearchChange = (dataSearch) => {
    setSearchTerm(dataSearch);
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(dataSearch.toLowerCase())
    );
    setFoodSearch(filtered);
  };
  const handleOrder = (food) => {
    api({
      body: {
        name: food.name,
        describe: food.describe,
        category: food.category,
        price: food.price,
        img: food.img,
        quantity: 1,
        food_id: food._id,
      },
      type: TypeHTTP.POST,
      path: "/order/create",
    })
      .then((res) => {
        Alert.alert("Đặt món thành công");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  const data = [
    {
      id: 1,
      name: "Mỹ",
      img: require("../assets/images/cookie.jpg"),
    },
    {
      id: 2,
      name: "Italian",
      img: require("../assets/images/pizza.jpg"),
    },
    {
      id: 3,
      name: "Indian",
      img: require("../assets/images/cari-an-do-1.jpg"),
    },
    {
      id: 4,
      name: "Chinese",
      img: require("../assets/images/vit-quay-bac-kinh.jpg"),
    },
  ];
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
  const onSelected = (item) => {
    api({ type: TypeHTTP.GET, path: "/food/get-all" }).then((res) => {
      setFoodSearch(
        res.filter(
          (food) => food.category.toLowerCase() === item.name.toLowerCase()
        )
      );
    });
  };
  const onSelectAll = () => {
    api({ type: TypeHTTP.GET, path: "/food/get-all" }).then((res) => {
      setSearchTerm("");
      setFoodSearch(res);
    });
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaScreen>
        <ScrollView style={styles.container}>
          {/* Cart and Greeting Text  */}
          <View style={styles.cartContainer}>
            <AppText style={styles.greetingText}>Xin chào!</AppText>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "black", fontSize: 14 }}>Đăng xuất</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.SETTINGS_SCREEN)}
            >
              <Text style={{ color: "orange", fontSize: 14 }}>
                Các món đã mua
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.OFFERS_SCREEN)}
            >
              <MaterialCommunityIcons name="cart" size={30} />
            </TouchableOpacity>
          </View>

          {/* Search Bar  */}
          <View style={styles.searchBar}>
            <TextInput
              leftIcon="search"
              value={searchTerm}
              onChangeText={handleSearchChange}
              placeholder="Tìm kiếm món ăn"
            />
          </View>

          {/* Scroll Categories  */}
          <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelected(item)}>
                <View style={styles.imgContainer}>
                  <Image source={item.img} style={styles.img} />
                  <AppText>{item.name}</AppText>
                </View>
              </TouchableOpacity>
            )}
            style={styles.scrollContainer}
          />

          {/* Popular Restaurants  */}
          <View style={styles.popularResContainer}>
            {/* Heading  */}
            <View style={styles.popularResHeading}>
              <AppText>Món ăn hấp dẫn</AppText>
              <TouchableWithoutFeedback onPress={() => onSelectAll()}>
                <AppText style={styles.primaryText}>Xem tất cả</AppText>
              </TouchableWithoutFeedback>
            </View>
            {foodSearch.map((food, index) => (
              <TouchableOpacity onPress={() => handleOrder(food)}>
                <RestaurantCard
                  key={index}
                  name={food.name}
                  describe={food.describe}
                  img={images[Number(food.img)]} //<Image source={{ uri: `../assets/images/${food.img}` }} />
                  price={food.price}
                  category={food.category}
                />
                //{" "}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaScreen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  container: {
    marginHorizontal: "auto",
    width: "95%",
  },

  deliverText: {
    color: COLORS.mediumGray,
    fontWeight: "400",
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "300",
  },
  img: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  imgContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  locationContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  locationText: {
    fontWeight: "500",
    marginRight: 10,
  },
  popularResContainer: {
    marginTop: 10,
  },
  popularResHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    color: COLORS.primary,
  },
  searchBar: {
    marginVertical: 10,
  },
  scrollContainer: {
    marginVertical: 15,
  },
});
