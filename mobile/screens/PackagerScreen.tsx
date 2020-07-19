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


export default function PackagerScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Packager Screen is under implementation</Text>
        {/* <Button
          title="Go to Packager Details"
          onPress={() => navigation.navigate("PackagerDetails")}
        /> */}
      </View>
    );
  }