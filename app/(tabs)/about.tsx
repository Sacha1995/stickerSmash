import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About screen</Text>
      <Text style={styles.text}>
        In this app you can add a sticker to your image.
      </Text>
      <Text style={styles.text}>
        Double tab the sticker to increase or decrease the size.
      </Text>
      <Text style={styles.text}>
        Place the sticker anywhere on the image that you like.
      </Text>
      <Text style={styles.text}>
        Once happy with the result, save the image to your device.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "flex-start",
    padding: 20,
  },
  header: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    textAlign: "left",
    fontSize: 16,
    marginBottom: 10,
  },
});
