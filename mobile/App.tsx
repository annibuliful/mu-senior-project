import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,

} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import VaccineScreen from "./screens/VaccineScreen";
import VaccineDetailsScreen from "./screens/VaccineDetailsScreen";
import FamilyScreen from "./screens/FamilyScreen";
import FamilyDetailsScreen from "./screens/FamilyDetailsScreen";
import SettingsScreen from "./screens/SettingScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CreateAppointmentScreen from "./screens/CreateAppointmentScreen";



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


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="CreateAppointment" component={CreateAppointmentScreen} />
    </HomeStack.Navigator>
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

function PackagerDetailsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Packager Details Details!</Text>
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


const Tab = createBottomTabNavigator();


// css
const navStyle = StyleSheet.create({
  navIcon: {
    flexDirection: "column",
    width: 32,
    height: 32,
  },
});
