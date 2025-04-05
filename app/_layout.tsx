import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Modal from "@/components/Modal";
import PatientInfo from "@/components/PatientInfo";
import CustomDropdown from "@/components/CustomDropdown";
import PatientCard from "@/components/PatientCard";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  const [emergencyKinds, setEmergencyKinds] = useState([]);

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
        <PatientCard emergencyKinds={emergencyKinds} />
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
});
