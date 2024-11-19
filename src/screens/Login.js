import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { AppButton } from "../components/Buttons";
import { COLORS, routes } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dangNhap = () => {
    dispatch(setUser({
      name: "Lâm Trung Hiếu",

    }));
    navigation.navigate("HomeScreen");
  }

  return (
    <SafeAreaScreen>
      <View style={styles.textContainer}>
        <AppText style={styles.loginText}>ĐĂNG NHẬP</AppText>
      </View>

      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder="Nhập email"
          onTextChange={() => console.log("typed")}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder="Nhập password"
          secureTextEntry
          onTextChange={() => console.log("typed")}
        />
      </View>

      <View style={styles.loginBtn}>
        <AppButton primary onPress={dangNhap}>
          Đăng nhập
        </AppButton>
      </View>
      <View>
        <TouchableWithoutFeedback
          onPress={() => console.log("To reset password")}
        >
          <AppText style={styles.grayText}>Quên mật khẩu?</AppText>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  detailsText: {
    marginVertical: 5,
  },
  grayText: {
    color: COLORS.mediumGray,
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
  },
  loginBtn: {
    marginVertical: 10,
    width: "90%",
  },
  loginText: {
    fontSize: 30,
    marginVertical: 5,
  },
  primaryText: {
    color: COLORS.primary,
    fontWeight: "500",
  },
  signUpContainer: {
    marginVertical: 50,
  },
  socialBtn: {
    marginVertical: 10,
  },
  socialBtnsContainer: {
    alignItems: "center",
    width: "90%",
  },
  textContainer: {
    alignItems: "center",
  },
});
