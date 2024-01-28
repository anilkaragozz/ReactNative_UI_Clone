import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageWrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/images/login.png")}
        />
        <View style={styles.formArea}>
          <TextInput
            style={styles.inputFields}
            placeholder="Please Enter Your Email"
            textContentType="emailAddress"
            inputMode="email"
            autoComplete="email"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputFields}
            placeholder="Please Enter Your Password"
            textContentType="password"
            secureTextEntry={true}
            inputMode="email"
            autoComplete="password"
            placeholderTextColor="black"
          />

          <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
            <View style={styles.registerButton}>
              <Text style={{ color: "#FFFFFF" }}> Sign In</Text>
            </View>
          </Pressable>

          <View style={{ margin: 10 }}>
            <Text style={styles.buttonText}> OR </Text>
          </View>

          <Pressable onPress={() => navigation.navigate("Home")}>
            <View style={styles.registerByAccount}>
              <Icon
                name="google"
                color="#9098B1"
                size={28}
                style={{ marginRight: 40, marginLeft: 40 }}
              />
              <Text style={styles.buttonText}> Login with Google </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <View style={styles.registerByAccount}>
              <Icon
                name="facebook"
                color="#9098B1"
                size={28}
                style={{ marginRight: 40, marginLeft: 40 }}
              />
              <Text style={styles.buttonText}> Login with facebook </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageWrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  formArea: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  inputFields: {
    borderColor: "#9098B1",
    borderWidth: 0.5,
    borderRadius: 5,
    width: 343,
    height: 48,
    paddingLeft: 30,
    marginTop: 10,
  },
  registerButton: {
    width: 343,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40BFFF",
    borderRadius: 5,
    borderColor: "#40BFFF",
    marginTop: 10,
  },
  registerByAccountPosition: {
    justifyContent: "center",
    alignItems: "center",
  },
  registerByAccount: {
    width: 343,
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "#9098B1",
    marginTop: 10,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#9098B1",
    lineHeight: 25.2,
    letterSpacing: 0.5,
    height: 26,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Login;
