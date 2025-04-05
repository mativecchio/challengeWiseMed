import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PatientInfo from "./PatientInfo";
import CustomDropdown from "./CustomDropdown";
import { Option } from "../types.d";

type Props = {
  emergencyKinds: Option[];
};

const PatientCard: FC<Props> = ({ emergencyKinds }) => {
  const boneIcon = require("../assets/images/ico-joints-bone.png");
  const anestesiaIcon = require("../assets/images/ico-anestesia.png");
  const cardioIcon = require("../assets/images/ico-cardio.png");
  const faceIcon = require("../assets/images/ico-face.png");
  return (
    <>
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
          <CustomDropdown data={emergencyKinds} />
        </View>
      </View>
    </>
  );
};

export default PatientCard;

const styles = StyleSheet.create({
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
