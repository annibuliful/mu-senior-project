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




export default function FamilyDetailsScreen({ route,navigation }: any) {
    const { itemName,itemAge,itemUrl } = route.params;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>Mock Family Screen  (Test sending profile data)</Text>
        <Text style={VaccineDetailsStyles.profileName}> Name : {JSON.parse(JSON.stringify(itemName))}</Text>
        <Text style={VaccineDetailsStyles.profileName}> Age : {JSON.parse(JSON.stringify(itemAge))}</Text>
        {/* <Text style={VaccineDetailsStyles.profileName}> ImgUrl : {JSON.parse(JSON.stringify(itemUrl))}</Text> */}
      </ScrollView>
    );
  }
  
  const VaccineDetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#fff",
    },
    profileName: {
      fontSize: 18,
    },
  
  });