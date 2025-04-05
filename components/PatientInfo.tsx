import { StyleSheet, Text, View } from "react-native";

const PatientInfo = ({ label, value }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default PatientInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  label: {
    fontWeight: 400,
    color: "#154FBF",
    fontSize: 14,
    lineHeight: 18,
  },
  value: {
    fontWeight: 400,
    color: "#000000",
    fontSize: 14,
    lineHeight: 18,
  },
});
