import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children?: ReactNode;
};
const Modal: FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    flexDirection: "column",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#719EC0",
    shadowOffset: {
      height: -5,
      width: 0,
    },
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
