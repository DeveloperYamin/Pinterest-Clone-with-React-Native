import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import pins from "../assets/data/pins";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const PinScreen = () => {
  const { image, title } = pins[0];
  const [ratio, setRatio] = useState(1);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    image && Image.getSize(image, (width, height) => setRatio(width / height));
  }, [image]);

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={{ ...styles.image, aspectRatio: ratio }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons
        name="chevron-back"
        size={35}
        color="white"
        style={{ ...styles.icon, top: top + 20 }}
      />
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    margin: 10,
    textAlign: "center",
    lineHeight: 35,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});