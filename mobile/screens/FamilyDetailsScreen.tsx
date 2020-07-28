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
        <View style={VaccineDetailsStyles.profileDetailsContainer}>
        <Image style={VaccineDetailsStyles.profileImg} source={itemUrl} />
        <View style={VaccineDetailsStyles.profileInfo}>
        <Text style={VaccineDetailsStyles.profileName}> Name : {JSON.parse(JSON.stringify(itemName))}</Text>
        <Text style={VaccineDetailsStyles.profileName}> Age : {JSON.parse(JSON.stringify(itemAge))}</Text>
        </View>
        </View>
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
    profileDetailsContainer:{
      flexDirection:"row",
      marginTop:20,
      justifyContent:"center"
    },
    profileInfo:{
      marginLeft:20,
      flexDirection:"column"
    },
    profileImg:{
      width:70,
      height:70,
      
    }
  
  });