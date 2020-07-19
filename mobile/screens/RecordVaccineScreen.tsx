import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  Group,
  Button,
  TouchableOpacity,
  TextInput,SafeAreaView,ScrollView,Image
} from "react-native";
import Toast from 'react-native-simple-toast';
// import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



export default function RecordVaccineScreen({ navigation }: any) {
  const [selectedValue, setSelectedValue] = useState("choice");
  const [selectedValue2, setSelectedValue2] = useState("choice");
  const [value, onChangeText] = React.useState("");
  const [value2, onChangeText2] = React.useState("");
  const [value3, onChangeText3] = React.useState("");
  const [value4, onChangeText4] = React.useState("");
  const [value5, onChangeText5] = React.useState("");
  const [value6, onChangeText6] = React.useState("");
  return (
<SafeAreaView style={{flex: 1, alignItems: "center"}}>
      <ScrollView showsVerticalScrollIndicator={false}  >
       
       
      <View style={styles.qaGroup}>
        <Text style={styles.header}>Vaccine Name</Text>
        <View style={styles.dropdown}>
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Hepatitis B Vaccine (HB)" value="0001" />
            <Picker.Item label="Bacillus
Calmette-Guerin Vaccine (BCG)" value="0002" />
          </Picker>
        </View>
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Batch No.</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Batch No. eg. U45B8244"
        />
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Receving Date</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Mock Date Picker" value="0001" />
          </Picker>
        </View>
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Expried Date</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Mock Date Picker" value="0001" />
          </Picker>
        </View>
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Hospital Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText2(text)}
          value={value2}
          placeholder="eg. Ramathibodi Hospital"
        />
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Comment</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText3(text)}
          value={value3}
          placeholder="Enter Your Comment"
        />
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Hospital Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText4(text)}
          value={value4}
          placeholder="eg. Ramathibodi Hospital"
        />
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Medical Staff ID</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText5(text)}
          value={value5}
          placeholder="Enter By Medical Staff"
        />
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Medical Staff Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText6(text)}
          value={value6}
          placeholder="Enter By Medical Staff"
        />
      </View>
      <View style={styles.qaGroup}>
        <Text style={styles.header}>Member</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue2}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue2(itemValue)
            }
          >
            <Picker.Item label="Benz" value="0001" />
            <Picker.Item label="Bo" value="0002" />
          </Picker>
        </View>
      </View>
      

      <View style={styles.recordButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
            Toast.show('Your Record has been saved');
          } }
          style={styles.button}
        >
          <Text style={styles.btnText}>Record Vaccine</Text>
        </TouchableOpacity>
      </View>

      
      </ScrollView>
    </SafeAreaView>







  );
}


// style={navStyle.navIcon}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: "#929292",
    borderRadius: 20,
    paddingLeft: 15,
  },
  qaGroup: {
    marginTop: 30,
    alignItems: "flex-start",
  },

  recordButton: {
    marginTop: 30,
    alignItems: "center",
    marginBottom:20
  },
  header: {
    fontSize: 18,
    color: "#656565",
    marginBottom: 11,
  },
  button: {
    marginTop: 5,
    padding: 5,
    width: 200,
    height: 44,
    borderRadius: 20,
    backgroundColor: "#01579B",
    textAlign: "center",
  },

  btnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: "#929292",
    borderRadius: 20,
    paddingLeft: 15,
  },
});
