import React from "react";
import { View, Text,Button} from "react-native";


export default function FamilyScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Family Screen</Text>
        <Button
          title="Go to Family Details"
          onPress={() => navigation.navigate("FamilyDetails")}
        />
      </View>
    );
  }
  