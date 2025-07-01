import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { register } from "api";

type Props = {
  navigation: any;
};

export default function RegisterScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email || !password || !confirmPassword || !firstName || !lastName || !role) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await register({ email, password, first_name: firstName, last_name: lastName, role });
      Alert.alert("Success", "Account created! Please login.");
      navigation.goBack();
    } catch (err: any) {
      console.error("Register error:", err);
      if (err?.response?.data?.message) {
        Alert.alert("Registration failed", err.response.data.message);
      } else {
        Alert.alert("Registration failed", "Try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Register" onPress={handleRegister} />
      )}

      <View style={{ marginTop: 20 }}>
        <Text>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.goBack()}>
            Login here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  header: { fontSize: 32, fontWeight: "bold", marginBottom: 24, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  link: { color: "blue", textDecorationLine: "underline" },
});
