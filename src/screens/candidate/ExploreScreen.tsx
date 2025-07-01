import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from "react-native";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.heroTitle}>Welcome to JobMatching App!</Text>
        <Text style={styles.heroSubtitle}>
          Find your dream job, fast and easy.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text>- Create a profile and upload your CV</Text>
          <Text>- Browse and apply to jobs</Text>
          <Text>- Get matched with the best offers using AI</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text>- Easy job search and filters</Text>
          <Text>- Personalized job recommendations</Text>
          <Text>- Manage your applications in one place</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What People Say</Text>
          <Text>"This app helped me find my dream job in no time!"</Text>
          <Text>"Super easy to use and very smart matching."</Text>
        </View>

        <View style={styles.footer}>
          <Text style={{ fontSize: 12, color: "#666" }}>
            © 2025 JobMatching Inc.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  heroTitle: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  heroSubtitle: { fontSize: 18, marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 6 },
  footer: { alignItems: "center", marginTop: 40, marginBottom: 20 },
});
