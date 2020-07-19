import React from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const VaccineDATA = [
  {
    id: "0001",
    title: "Vaccine Name 1",
    desease: "Desease Name 1"
  },
  {
    id: "0002",
    title: "Vaccine Name2",
    desease: "Desease Name 2"
  },
  {
    id: "0003",
    title: "Vaccine Name3",
    desease: "Desease Name 3"
  },
];
//  ------ VaccineScreen Start -----

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

function Item({ id, title,desease, selected, onSelect }: any) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}


export default function VaccineScreen({ navigation }: any) {
    const [selected, setSelected] = React.useState(new Map());
    const onSelect = React.useCallback(
      (id) => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
  
        setSelected(newSelected);
      },
      [selected]
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={VaccineDATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={() =>
                navigation.navigate("VaccineDetails", { itemName: item.title })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
        />
      </SafeAreaView>
  
    );
  }
