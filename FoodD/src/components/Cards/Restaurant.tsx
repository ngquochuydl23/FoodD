import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../utils";

type Props = {
  img: any;
  describe: string;
  name: string;
  price: number;
  category: string;
};

const Restaurant = ({ img, describe, name, category, price }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} resizeMode="cover" />
      <View>
        <Text>{name}</Text>
        <Text>Giá: {price} VND</Text>
        <View style={styles.ratings}>
          {/* <MaterialCommunityIcons
            name="star"
            size={20}
            color={COLORS.primary}
          /> */}
          <Text style={styles.ratingsText}>{category}</Text>
          <Entypo name="dot-single" size={20} />
          <Text>{describe}</Text>
        </View>
      </View>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    width: "100%",
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 200,
    width: "100%",
  },
  ratings: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ratingsText: {
    color: COLORS.mediumGray,
    marginLeft: 3,
  },
});
