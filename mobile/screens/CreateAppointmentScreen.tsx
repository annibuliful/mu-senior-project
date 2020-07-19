import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  Group,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Toast from 'react-native-simple-toast';
export default function CreateAppointmentScreen({ navigation }: any) {
  const [selectedValue, setSelectedValue] = useState("choice");
  const [selectedValue2, setSelectedValue2] = useState("choice");
  const [selectedValue3, setSelectedValue3] = useState("choice");
  const [value, onChangeText] = React.useState("");
  // const [value2, onChangeText2] = React.useState("");
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.qaGroup}>
        <Text style={styles.header}>Member</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Benz" value="0001" />
            <Picker.Item label="Bo" value="0002" />
          </Picker>
        </View>
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Vaccine</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue2}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue2(itemValue)
            }
          >
            <Picker.Item label="Hepatitis B Vaccine (HB)" value="0001" />
            <Picker.Item label="Bacillus
Calmette-Guerin Vaccine (BCG)" value="0002" />
          </Picker>
        </View>
      </View>

      <View style={styles.qaGroup}>
        <Text style={styles.header}>Date</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue3}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue3(itemValue)
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
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Hospital Name"
        />
      </View>

      <View style={styles.qaGroup}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
            Toast.show('Your Plan has been saved');
          } }
          style={styles.button}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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
