import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "@react-navigation/stack";

// Mock Data
const VaccineDATA = [
  {
    id: "0001",
    title: "Vaccine Name 1",
  },
  {
    id: "0002",
    title: "Vaccine Name2",
  },
  {
    id: "0003",
    title: "Vaccine Name3",
  },
];

function Item({ id, title, selected, onSelect }: any) {
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

//  ------ Home Start -----
function HomeScreen({ navigation }: any) {
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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
//  ------ Home End -----

//  ------ VaccineScreen Start -----
function VaccineScreen({ navigation }: any) {
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
            onSelect={() => navigation.navigate("VaccineDetails",{itemName:item.title})}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selected}
      />
    </SafeAreaView>

    // <View style={{ flex: 1, alignItems: "center" }}>
    //   <Text>Vaccine Screen</Text>
    //   <Button
    //     title="Go to Vaccine Details"
    //     onPress={() => navigation.navigate("VaccineDetails")}
    //   />
    // </View>
  );
}

const VaccineStack = createStackNavigator();

function VaccineStackScreen() {
  return (
    <VaccineStack.Navigator>
      <VaccineStack.Screen name="Vaccine" component={VaccineScreen} />
      <VaccineStack.Screen
        name="VaccineDetails"
        component={VaccineDetailsScreen}
      />
    </VaccineStack.Navigator>
  );
}

//  ------ VaccineScreen End -----

//  ------ VaccineDetailsScreen Start -----
function VaccineDetailsScreen({ route,navigation }: any) {
  const { itemName } = route.params;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={VaccineDetailsStyles.imageRow}>
        <Image
          source={require("./assets/images/vc_detaild/syringe.png")}
          resizeMode="contain"
          style={VaccineDetailsStyles.image}
        ></Image>
        <View style={VaccineDetailsStyles.vaccineNameColumn}>
          <Text style={VaccineDetailsStyles.vaccineName}>{JSON.parse(JSON.stringify(itemName))}</Text>
          <Text style={VaccineDetailsStyles.vaccineName}>Disease Name</Text>
        </View>
      </View>
      <View>
        <Text style={VaccineDetailsStyles.vcContent}>
          Polio is caused by a poliovirus. Most people infected with a
          poliovirus have no symptoms, but some people experience sore throat,
          fever, tiredness, nausea, headache, or stomach pain. A smaller group
          of people will develop more serious symptoms that affect the brain and
          spinal cord. In the most severe cases, polio can cause weakness and
          paralysis (when a person can’t move parts of the body) which can lead
          to permanent disability and, in rare cases, death.
        </Text>
        <Text style={VaccineDetailsStyles.recommendedTo}>3 Dose</Text>
      </View>
      <View style={VaccineDetailsStyles.buttonArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={VaccineDetailsStyles.button}
        >
          <Text style={VaccineDetailsStyles.btnText}>
            Create an appointment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={VaccineDetailsStyles.button}
        >
          <Text style={VaccineDetailsStyles.btnText}>Record Vaccine</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const VaccineDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 81,
    height: 60,
  },
  vaccineName: {
    fontSize: 18,
  },

  vaccineNameColumn: {
// 
  },
  imageRow: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 60,
  },
  vcContent: {
    marginTop: 20,
    height: 300,
    width: 300,
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor:"#bfbfbf",
    // backgroundColor: "#f2f2f2",
  },
  recommendedTo: {
    marginLeft: 30,
  },

  buttonArea: {
    alignItems: "center",
  },
  button: {
    marginTop: 5,
    padding: 5,
    width: 200,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 20,
    backgroundColor: "#01579B",
    textAlign: "center",
  },

  btnText: {
    color: "white",
   },
});

const VaccineDetailsStack = createStackNavigator();

function VaccineDetailsStackScreen() {
  return (
    <VaccineDetailsStack.Navigator>
      <VaccineDetailsStack.Screen
        name="VaccineDetails"
        component={VaccineDetailsScreen}
      />
      <VaccineDetailsStack.Screen name="Details" component={DetailsScreen} />
    </VaccineDetailsStack.Navigator>
  );
}

//  ------ VaccineDetailsScreen End -----

//  ------ FamilyScreen Start -----
function FamilyScreen({ navigation }: any) {
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

const FamilyStack = createStackNavigator();

function FamilyStackScreen() {
  return (
    <FamilyStack.Navigator>
      <FamilyStack.Screen name="Family" component={FamilyScreen} />
      <FamilyStack.Screen
        name="FamilyDetails"
        component={FamilyDetailsScreen}
      />
    </FamilyStack.Navigator>
  );
}
//  ------ FamilyScreen End -----

//  ------ FamilyDetailsScreen Start -----
function FamilyDetailsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Family Details Details!</Text>
    </View>
  );
}

//  ------ FamilyDetailsScreen End -----

//  ------ PackagerScreen Start -----
function PackagerScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Packager Screen</Text>
      <Button
        title="Go to Packager Details"
        onPress={() => navigation.navigate("PackagerDetails")}
      />
    </View>
  );
}

const PackagerStack = createStackNavigator();

function PackagerStackScreen() {
  return (
    <PackagerStack.Navigator>
      <PackagerStack.Screen name="Packager" component={PackagerScreen} />
      <PackagerStack.Screen
        name="PackagerDetails"
        component={PackagerDetailsScreen}
      />
    </PackagerStack.Navigator>
  );
}

//  ------ PackagerScreen End -----

//  ------ PackagerDetailsScreen Start -----
function PackagerDetailsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Packager Details Details!</Text>
    </View>
  );
}
//  ------ PackagerDetailsScreen End -----

//  ------ Setting Start -----
function SettingsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
    </View>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

//  ------ Setting End -----

// MOCK not-implement Page
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Test Link to another stack page!</Text>
    </View>
  );
}
// MOCK not-implement Page

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/images/botttom_nav/home.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                ></Image>
              ),
            }}
          />
          <Tab.Screen
            name="Vaccine"
            component={VaccineStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/images/botttom_nav/vaccine.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                ></Image>
              ),
            }}
          />
          <Tab.Screen
            name="Family"
            component={FamilyStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/images/botttom_nav/family.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                ></Image>
              ),
            }}
          />
          <Tab.Screen
            name="Packager"
            component={PackagerStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/images/botttom_nav/packager.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                ></Image>
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/images/botttom_nav/setting.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                ></Image>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// css
const navStyle = StyleSheet.create({
  navIcon: {
    flexDirection: "column",
    width: 32,
    height: 32,
    
  },
});
