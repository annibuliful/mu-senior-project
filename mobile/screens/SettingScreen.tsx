import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
const SettingScreen = (props: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Settings screen</Text>
      <TouchableOpacity
        onPress={() => {
          props.dispatch({ type: "th" });
        }}
        style={styles.button}
      >
        <Text style={styles.btnText}>TH</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.dispatch({ type: "en" });
        }}
        style={styles.button}
      >
        <Text style={styles.btnText}>EN</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    translation: state.translation
  };
};
export default connect(mapStateToProps)(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dropdown: {
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: "#929292",
    borderRadius: 20,
    paddingLeft: 15
  },
  qaGroup: {
    marginTop: 30,
    alignItems: "flex-start"
  },

  recordButton: {
    marginTop: 30,
    alignItems: "center",
    marginBottom: 20
  },
  header: {
    fontSize: 18,
    color: "#656565",
    marginBottom: 11
  },
  button: {
    marginTop: 5,
    padding: 5,
    width: 200,
    height: 44,
    borderRadius: 20,
    backgroundColor: "#01579B",
    textAlign: "center"
  },

  btnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: "#929292",
    borderRadius: 20,
    paddingLeft: 15
  }
});
