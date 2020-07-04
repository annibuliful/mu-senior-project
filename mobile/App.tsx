import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ---------- Screen Section Start ----------
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function VaccineScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Vaccine Screen</Text>
    <Button
      title="Go to Vaccine Details"
      onPress={() => navigation.navigate('VaccineDetails')}
    />
  </View>
  );
}

function VaccineDetailsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vaccine Details Details!</Text>
    </View>
  );
}

function FamilyScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Family Screen</Text>
    <Button
      title="Go to Family Details"
      onPress={() => navigation.navigate('FamilyDetails')}
    />
  </View>
  );
}


function FamilyDetailsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Family Details Details!</Text>
    </View>
  );
}

function PackagerScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Packager Screen</Text>
    <Button
      title="Go to Packager Details"
      onPress={() => navigation.navigate('PackagerDetails')}
    />
  </View>
  );
}

function PackagerDetailsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Packager Details Details!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}

// ---------- Screen Section End ----------


// ---------- Stack Nav Section Start ----------
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const VaccineStack = createStackNavigator();

function VaccineStackScreen(){
  return (
    <VaccineStack.Navigator>
    <VaccineStack.Screen name="Vaccine" component={VaccineScreen} />
    <VaccineStack.Screen name="VaccineDetails" component={VaccineDetailsScreen} />
  </VaccineStack.Navigator>
  )
}

const FamilyStack = createStackNavigator();

function FamilyStackScreen(){
  return (
    <FamilyStack.Navigator>
    <FamilyStack.Screen name="Family" component={FamilyScreen} />
    <FamilyStack.Screen name="FamilyDetails" component={FamilyDetailsScreen} />
  </FamilyStack.Navigator>
  )
}

const PackagerStack = createStackNavigator();

function PackagerStackScreen(){
  return (
    <PackagerStack.Navigator>
    <PackagerStack.Screen name="Packager" component={PackagerScreen} />
    <PackagerStack.Screen name="PackagerDetails" component={PackagerDetailsScreen} />
  </PackagerStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

// ---------- Stack Nav Section End ----------
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Vaccine" component={VaccineStackScreen} />
        <Tab.Screen name="Family" component={FamilyStackScreen} />
        <Tab.Screen name="Packager" component={PackagerStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
