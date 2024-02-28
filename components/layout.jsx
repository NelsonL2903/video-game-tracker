import { View, StatusBar } from "react-native";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout(props) {
  const insets = useSafeAreaInsets();

  const insetPadding = {
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View
      style={{
        ...styles.layout,
        ...insetPadding,
      }}
    >
      {props.children}
      <StatusBar style="auto" />
    </View>
  );
}
