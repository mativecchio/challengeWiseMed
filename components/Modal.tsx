import { StyleSheet, View } from "react-native";

const Modal = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#719EC0",
  },
});
