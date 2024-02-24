import { View, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#246EE9",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Layout(props) {
  return (
    <View style={styles.container}>
      {props.children}
      <StatusBar style="auto" />
    </View>
  );
}
