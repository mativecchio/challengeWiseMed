import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Dropdown } from "react-native-element-dropdown";

import { Image, StyleSheet, Text, View } from "react-native";
import Modal from "@/components/ui/Modal/Modal";
import PatientInfo from "@/components/PatientInfo";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const boneIcon = require("../assets/images/ico-joints-bone.png");
  const anestesiaIcon = require("../assets/images/ico-anestesia.png");
  const cardioIcon = require("../assets/images/ico-cardio.png");
  const faceIcon = require("../assets/images/ico-face.png");
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  const [emergencyKinds, setEmergencyKinds] = useState([]);
  const [selected, setSelected] = useState();

  const getOptions = async () => {
    const response = await fetch(
      "https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/emergency-kinds.json"
    );
    if (response.ok) {
      const data = await response.json();
      setEmergencyKinds(data.emergencyKinds);
    }
  };
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    getOptions();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Modal>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Traumatología</Text>
            <Text style={styles.subtitle}>Dr. José Pedro Sans</Text>
          </View>
          <Image source={boneIcon} style={styles.iconBone} />
        </View>
        <View style={styles.content}>
          <View style={styles.patientHeader}>
            <Image source={faceIcon} style={styles.iconFace} />
            <View>
              <Text style={styles.patientName}>Jorge Avendaño Pérez</Text>
              <Text style={styles.patientName}>35 años</Text>
            </View>
          </View>
          <View>
            <PatientInfo label="Ficha médica" value="77884" />
            <PatientInfo label="Diagnóstico" value="Calcificación Talón" />
            <PatientInfo label="Intervención" value="Extirpación en talón" />
            <PatientInfo label="Evaluación preanestésica" value="Sí" />
            <PatientInfo label="Tiempo de solicitud" value="3 días" />
            <PatientInfo label="Suspensiones" value="2" />
          </View>
          <View style={styles.iconsRow}>
            <Image source={cardioIcon} />
            <Image source={anestesiaIcon} />
          </View>
          <View>
            <Dropdown
              // style={styles.dropdown}
              // placeholderStyle={styles.placeholderStyle}
              // selectedTextStyle={styles.selectedTextStyle}
              // inputSearchStyle={styles.inputSearchStyle}
              // iconStyle={styles.iconStyle}
              data={emergencyKinds}
              
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder="Seleccionar"
              value={selected}
              onChange={(item) => {
                setSelected(item.value);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    minWidth: 250,
  },
  header: {
    backgroundColor: "#154FBF",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    paddingTop: 10,
    paddingLeft: 15,
    fontWeight: 600,
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 18,
  },
  subtitle: {
    paddingLeft: 15,
    paddingBottom: 25,
    fontWeight: 600,
    color: "#FFFFFF",
    fontSize: 12,
  },
  iconBone: {
    marginRight: 5,
  },
  iconFace: {
    marginTop: 5,
  },
  content: {
    padding: 15,
  },
  patientHeader: {
    flexDirection: "row",
    marginBottom: 7,
  },
  patientName: {
    fontWeight: 500,
    color: "#000000",
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 5,
  },
  iconsRow: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
  },
});
