import React from "react";
import { Text, View, Button, StyleSheet,TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
       <View style={styles.welcomeArea}>
      <Text style={styles.welcome} >Welcome Mr.Benz</Text>
      </View>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateAppointment")
          
          } }
          style={styles.calendarArea}
        >
          <Text style={styles.calendarText}>Mock Calendar Area</Text>
        </TouchableOpacity>
    {/* <View style={styles.welcomeArea}> */}
      {/* <Text style={styles.welcome} >Report Immunity Status</Text> */}
      </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  welcome:{
    fontSize:24,
    alignItems: "flex-start",
  },
  welcomeArea:{
    borderBottomColor:"#01579B",
    borderBottomWidth:3,
    margin:15,
    alignItems: "flex-start",
  },
  calendarArea:{
    marginTop: 5,
    padding: 5,
    width: 300,
    height: 300,

    backgroundColor: "#5F5F5F",
    textAlign: "center",
  },
  calendarText:{
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
});
