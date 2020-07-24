import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// redux
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";
//screens
import HomeScreen from "./screens/HomeScreen";
import VaccineScreen from "./screens/VaccineScreen";
import VaccineDetailsScreen from "./screens/VaccineDetailsScreen";
import FamilyScreen from "./screens/FamilyScreen";
import FamilyDetailsScreen from "./screens/FamilyDetailsScreen";
import SettingsScreen from "./screens/SettingScreen";
// import DetailsScreen from "./screens/DetailsScreen";
import CreateAppointmentScreen from "./screens/CreateAppointmentScreen";
import RecordVaccineScreen from "./screens/RecordVaccineScreen";
import PackagerScreen from "./screens/PackagerScreen";
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="CreateAppointment"
        component={CreateAppointmentScreen}
      />
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
      <HomeStack.Screen name="RecordVaccine" component={RecordVaccineScreen} />
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
      <VaccineDetailsStack.Screen
        name="CreateAppointment"
        component={CreateAppointmentScreen}
      />
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
    height: 32
  }
});

const indexScreen = (props: any) => {
  const { home, vaccine, family, packager, setting } = props;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={home}
            component={HomeStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/images/botttom_nav/home.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                />
              )
            }}
          />
          <Tab.Screen
            name={vaccine}
            component={VaccineStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/images/botttom_nav/vaccine.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                />
              )
            }}
          />
          <Tab.Screen
            name={family}
            component={FamilyStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/images/botttom_nav/family.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                />
              )
            }}
          />
          <Tab.Screen
            name={packager}
            component={PackagerStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/images/botttom_nav/packager.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                />
              )
            }}
          />
          <Tab.Screen
            name={setting}
            component={SettingsStackScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/images/botttom_nav/setting.png")}
                  resizeMode="contain"
                  style={navStyle.navIcon}
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const maptStateToProps = ({ locale: { translation } }: any) => {
  return {
    home: translation.home,
    vaccine: translation.vaccine,
    family: translation.family,
    packager: translation.packager,
    setting: translation.setting
  };
};
const App = connect(maptStateToProps)(indexScreen);
const store = createStore(rootReducer);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
