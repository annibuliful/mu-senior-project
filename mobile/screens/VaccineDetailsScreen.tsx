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




export default function VaccineDetailsScreen({ route,navigation }: any) {
    const { itemName } = route.params;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={VaccineDetailsStyles.imageRow}>
          <Image
            source={require("../assets/images/vc_detaild/syringe.png")}
            resizeMode="contain"
            style={VaccineDetailsStyles.image}
          ></Image>
          <View style={VaccineDetailsStyles.vaccineNameColumn}>
            <Text style={VaccineDetailsStyles.vaccineName}>{JSON.parse(JSON.stringify(itemName))}</Text>
            <Text style={VaccineDetailsStyles.vaccineName}>Disease Name</Text>
          </View>
        </View>
        <View>
          <Text style={VaccineDetailsStyles.vcContent}>
            Polio is caused by a poliovirus. Most people infected with a
            poliovirus have no symptoms, but some people experience sore throat,
            fever, tiredness, nausea, headache, or stomach pain. A smaller group
            of people will develop more serious symptoms that affect the brain and
            spinal cord. In the most severe cases, polio can cause weakness and
            paralysis (when a person can’t move parts of the body) which can lead
            to permanent disability and, in rare cases, death.
          </Text>
          <Text style={VaccineDetailsStyles.recommendedTo}>3 Dose</Text>
        </View>
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
      </ScrollView>
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
  
    vaccineNameColumn: {
  // 
    },
    imageRow: {
      flexDirection: "row",
      marginTop: 20,
      marginLeft: 60,
    },
    vcContent: {
      marginTop: 20,
      height: 300,
      width: 300,
      fontSize: 16,
      marginLeft: 30,
      marginRight: 30,
      // borderWidth: 1,
      borderBottomWidth: 1,
      borderBottomColor:"#bfbfbf",
      // backgroundColor: "#f2f2f2",
    },
    recommendedTo: {
      marginLeft: 30,
      marginBottom:10,
      marginTop:10,
    },
  
    buttonArea: {
      alignItems: "center",
    },
    button: {
      marginTop: 5,
      padding: 5,
      // width: 200,
      // borderWidth: 3,
      height:43,
      width:285,
      borderColor: "#000000",
      borderRadius: 20,
      backgroundColor: "#01579B",
      textAlign: "center",

    },
  
    btnText: {
      color: "white",
      textAlign: "center",
      fontSize:24,
      fontWeight:"bold"
     },
  });