import { Entypo, Feather } from "@expo/vector-icons";
import { useSignOut } from "@nhost/react";
import React from "react";
import { Image, ScrollView, StyleSheet, useColorScheme } from "react-native";
import pins from "../assets/data/pins";
import MasonryList from "../components/MasonryList";
import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const { signOut } = useSignOut();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.info}>
        <View style={styles.iconContainer}>
          <Feather
            size={24}
            name="share"
            onPress={signOut}
            color="gray"
            style={styles.icon}
          />
          <Entypo
            size={24}
            name="dots-three-horizontal"
            color="gray"
            style={styles.icon}
          />
        </View>
        <Image
          source={{
            uri: "https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-9/148289406_105993934859783_4291012364172084677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHHignath6-ofch3atPiqpE64w4ust0LsTrjDi6y3QuxCkntvw6oUkXov-djo-6EvaEanD96ck_s99Yqu9urpyh&_nc_ohc=EHY6wbmB4vEAX-zQaxg&_nc_ht=scontent.fdac135-1.fna&oh=00_AT9VhOYysxQoQ7qlxtVsf4-kFwsmiVv88-pGYgGjgkjAhw&oe=62BED03D",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Yamin</Text>
        <Text
          style={{ ...styles.subtitle, color: isDarkMode ? "white" : "black" }}
        >
          123 Follower | 456 Followings
        </Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  info: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 15,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
  },
  subtitle: {
    color: "#181818",
    fontWeight: "600",
    paddingBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
