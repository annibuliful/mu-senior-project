import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function VaccineDetailsScreen({ route, navigation }: any) {
  const { itemName, itemDesease, itemShortDes } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={VaccineDetailsStyles.imageRow}>
        <Image
          source={require("../assets/images/vc_detaild/syringe.png")}
          resizeMode="contain"
          style={VaccineDetailsStyles.image}
        ></Image>
        <View style={VaccineDetailsStyles.vaccineNameColumn}>
          <Text style={VaccineDetailsStyles.vaccineNameHeader}>
            {JSON.parse(JSON.stringify(itemName))}
          </Text>
          <Text style={VaccineDetailsStyles.vaccineName}>
            {JSON.parse(JSON.stringify(itemDesease))}
          </Text>
        </View>
      </View>
      <ScrollView style={VaccineDetailsStyles.vcShortDes}>
        <Text style={VaccineDetailsStyles.vcContentHeader}>
          บุคคลที่ควรได้รับวัคซีน
        </Text>
        <Text style={VaccineDetailsStyles.vcContent}>
          {JSON.parse(JSON.stringify(itemShortDes))}
        </Text>
      </ScrollView>
      <View style={VaccineDetailsStyles.buttonArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAppointment")}
          style={VaccineDetailsStyles.button}
        >
          <Text style={VaccineDetailsStyles.btnText}>
            Create an appointment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecordVaccine")}
          style={VaccineDetailsStyles.button}
        >
          <Text style={VaccineDetailsStyles.btnText}>Record Vaccine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const VaccineDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 81,
    height: 60,
  },
  vaccineName: {
    fontSize: 18,
  },
  vaccineNameHeader: {
    fontSize: 20,
    fontWeight:"bold",
  },

  vaccineNameColumn: {
    flex:1,
  },
  imageRow: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },
  vcContent: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
    lineHeight: 24,
  },
  vcContentHeader: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    lineHeight: 24,
    fontWeight: "bold",
  },

  buttonArea: {
    alignItems: "center",
    marginBottom:10,
  },
  button: {
    marginTop: 5,
    padding: 5,
    height: 43,
    width: 285,
    borderColor: "#000000",
    borderRadius: 20,
    backgroundColor: "#01579B",
    textAlign: "center",
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  vcShortDes: {
    backgroundColor: "#e6e6e6",
    marginTop: 20,
    marginBottom: 20,
  },
});
