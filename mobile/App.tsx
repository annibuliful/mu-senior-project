import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, StyleSheet} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






//  ------ Home Start -----
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

const VaccineStack = createStackNavigator();

function VaccineStackScreen(){
  return (
    <VaccineStack.Navigator>
    <VaccineStack.Screen name="Vaccine" component={VaccineScreen} />
    <VaccineStack.Screen name="VaccineDetails" component={VaccineDetailsScreen} />
  </VaccineStack.Navigator>
  )
}

//  ------ VaccineScreen End -----

//  ------ VaccineDetailsScreen Start -----
function VaccineDetailsScreen({ navigation }:any) {
  return (
    <View style={VaccineDetailsStyles.container}>
      <Text>Vaccine Details Details!</Text>
    </View>
  );
}

const VaccineDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    padding: 20,
  },
});

//  ------ VaccineDetailsScreen End -----

//  ------ FamilyScreen Start -----
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


const FamilyStack = createStackNavigator();

function FamilyStackScreen(){
  return (
    <FamilyStack.Navigator>
    <FamilyStack.Screen name="Family" component={FamilyScreen} />
    <FamilyStack.Screen name="FamilyDetails" component={FamilyDetailsScreen} />
  </FamilyStack.Navigator>
  )
}
//  ------ FamilyScreen End -----


//  ------ FamilyDetailsScreen Start -----
function FamilyDetailsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Family Details Details!</Text>
    </View>
  );
}

//  ------ FamilyDetailsScreen End -----

//  ------ PackagerScreen Start -----
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


const PackagerStack = createStackNavigator();

function PackagerStackScreen(){
  return (
    <PackagerStack.Navigator>
    <PackagerStack.Screen name="Packager" component={PackagerScreen} />
    <PackagerStack.Screen name="PackagerDetails" component={PackagerDetailsScreen} />
  </PackagerStack.Navigator>
  )
}

//  ------ PackagerScreen End -----


//  ------ PackagerDetailsScreen Start -----
function PackagerDetailsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Packager Details Details!</Text>
    </View>
  );
}
//  ------ PackagerDetailsScreen End -----

//  ------ Setting Start -----
function SettingsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
