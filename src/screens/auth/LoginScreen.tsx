import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Please enter email and password");
        return;
      }
      setLoading(true);
      await login(email, password);
    } catch (err) {
      Alert.alert("Login failed", "Check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button title={loading ? "Logging in..." : "Log In"} onPress={onLogin} disabled={loading} />
      <Button title="Go to Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
