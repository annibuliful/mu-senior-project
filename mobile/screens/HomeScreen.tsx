import React from "react";
import {
  Text,
  View,
  Button,
} from "react-native";

export default function HomeScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }