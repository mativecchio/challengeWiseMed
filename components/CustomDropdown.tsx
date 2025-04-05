import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const CustomDropdown = ({ data }: { data: any }) => {
  const arrowIcon = require("../assets/images/ico-expand-more.png");
  const [selected, setSelected] = useState<number>();

  const renderLabel = () => (
    <Text style={styles.dropdownLabel}>Tipo de Urgencia</Text>
  );
  return (
    <View style={styles.dropdownContainer}>
      {renderLabel()}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="name"
        valueField="id"
        placeholder="Seleccionar"
        value={selected}
        onChange={(item) => {
          setSelected(item.value);
        }}
        renderRightIcon={() => <Image source={arrowIcon} />}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: "white",
    marginTop: 5,
  },
  dropdown: {
    height: 50,
    borderColor: "#154FBF",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 13,
  },
  dropdownLabel: {
    color: "#154FBF",
    fontSize: 14,
    lineHeight: 18,
    position: "absolute",
    backgroundColor: "white",
    left: 10,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 5,
  },
  placeholderStyle: {
    color: "#719EC0",
    fontSize: 16,
    lineHeight: 24,
  },
  selectedTextStyle: {
    color: "#719EC0",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  iconStyle: {
    color: "#154FBF",
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
