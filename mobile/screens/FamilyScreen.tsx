import React from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Constants from "expo-constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { View } from "../components/Themed";

const FamilyData = [
  {
    id: "0001",
    title: "Benz",
    age:"21",
    imgUrl:require("../assets/images/family/mock-user-profile.png")
  },
  {
    id: "0002",
    title: "Bo",
    age:"11",
    imgUrl:require("../assets/images/family/mock-user-profile.png")
  },
 
];
//  ------ VaccineScreen Start -----

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // backgroundColor:"white",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:"row",
  },
  title: {
    fontSize: 24,
    fontWeight:"bold",
  },
  age:{
    fontSize:13,
    color:"#6A6A6A"
  },
  profileDetails: {
    backgroundColor:"#f9c2ff",
flexDirection:"column"
  },
  mockimg:{
    width:50,
    height:50,
    marginRight:15,
  }
});

function Item({ id, title,age,imgUrl, selected, onSelect }: any) {
  return (

    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" },
      ]}
    >
      {/* <Image style={styles.mockimg} source={require("../assets/images/family/mock-user-profile.png")} /> */}
      <Image style={styles.mockimg} source={imgUrl} />
      <View style={styles.profileDetails}>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.age}>{age} years old</Text>
      </View>
     
    </TouchableOpacity>
  );
}


export default function FamilyScreen({ navigation }: any) {
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
          data={FamilyData}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              age={item.age}
              imgUrl={item.imgUrl}
              selected={!!selected.get(item.id)}
              onSelect={() =>
                navigation.navigate("FamilyDetails", { itemName: item.title,itemAge:item.age,itemUrl:item.imgUrl })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
        />
      </SafeAreaView>
  
    );
  }
