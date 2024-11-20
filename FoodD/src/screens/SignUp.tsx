import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { AppButton } from "../components/Buttons";
import { COLORS, routes } from "../utils";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { api, TypeHTTP } from "../utils/api";
export default function SignUp({ navigation }: any) {
  const [info, setInfo] = useState({
    phone: "",
    passWord: "",
    address: "",
    email: "",
    fullName: "",
    confirmPassword: "",
  });
  const refreshData = () => {
    setInfo({
      phone: "",
      passWord: "",
      address: "",
      email: "",
      fullName: "",
      confirmPassword: "",
    });
  };
  const Submit = () => {
    if (info.phone === "") {
      Alert.alert("Vui lòng nhập số điện thoại");
      return;
    }
    if (info.passWord === "") {
      Alert.alert("Vui lòng nhập mật khẩu");
      return;
    }
    if (info.address === "") {
      Alert.alert("Vui lòng nhập địa chỉ");
      return;
    }
    if (info.email === "") {
      Alert.alert("Vui lòng nhập email");
      return;
    }
    if (info.fullName === "") {
      Alert.alert("Vui lòng nhập họ và tên");
      return;
    }
    if (info.confirmPassword === "") {
      Alert.alert("Vui lòng xác nhận mật khẩu");
      return;
    }
    if (!/^0[0-9]{9}$/.test(info.phone)) {
      Alert.alert("Số điện thoại không hợp lệ");
      return;
    }
    if (info.passWord.length < 6) {
      Alert.alert("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (info.passWord !== info.confirmPassword) {
      Alert.alert("Mật khẩu không trùng khớp");
      return;
    }
    api({ body: info, type: TypeHTTP.POST, path: "/user/signup" })
      .then((res) => {
        Alert.alert("Đăng ký thành công");
        refreshData();
        navigation.navigate(routes.LOGIN_SCREEN);
      })
      .catch((err) => {
        if (err.message === "Số điện thoại đã tồn tại") {
          Alert.alert(err.message);
        } else {
          Alert.alert("Lỗi hệ thống");
        }
      });
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaScreen>
        <View style={styles.textContainer}>
          <AppText style={styles.signUpText}>ĐĂNG KÝ</AppText>
          <AppText style={styles.detailsText}>
            Hãy nhập thông tin của bạn
          </AppText>
        </View>
        <ScrollView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={info.fullName}
            onChangeText={(e) => setInfo({ ...info, fullName: e })}
            placeholder="Họ và tên"
          />
          <TextInput
            style={styles.input}
            value={info.email}
            onChangeText={(e) => setInfo({ ...info, email: e })}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            value={info.phone}
            onChangeText={(e) => setInfo({ ...info, phone: e })}
            placeholder="Số điện thoại"
          />
          <TextInput
            style={styles.input}
            value={info.address}
            onChangeText={(e) => setInfo({ ...info, address: e })}
            placeholder="Địa chỉ"
          />

          <TextInput
            style={styles.input}
            value={info.passWord}
            onChangeText={(e) => setInfo({ ...info, passWord: e })}
            secureTextEntry={true}
            placeholder="Mật khẩu"
          />
          <TextInput
            style={styles.input}
            value={info.confirmPassword}
            onChangeText={(e) => setInfo({ ...info, confirmPassword: e })}
            secureTextEntry={true}
            placeholder="Xác nhận mật khẩu"
          />
          <View style={styles.signUp}>
            <AppButton primary onPress={() => Submit()}>
              Đăng ký
            </AppButton>
          </View>
          <View style={styles.already}>
            <AppText style={[{ fontSize: 16 }, styles.grayText]}>
              Bạn đã có tài khoản?{" "}
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
              >
                <AppText style={styles.primaryText}>Đăng nhập</AppText>
              </TouchableWithoutFeedback>
            </AppText>
          </View>
        </ScrollView>
      </SafeAreaScreen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  already: {
    alignItems: "center",
    marginVertical: 10,
  },
  detailsText: {
    marginVertical: 5,
  },
  grayText: {
    color: COLORS.mediumGray,
  },
  input: {
    marginVertical: 8,
  },
  inputContainer: {
    marginVertical: 20,
    width: "90%",
  },
  primaryText: {
    color: COLORS.primary,
    fontWeight: "500",
  },
  signUp: {
    width: "100%",
    marginVertical: 10,
  },
  signUpText: {
    fontSize: 30,
    marginVertical: 5,
  },
  textContainer: {
    alignItems: "center",
  },
});
