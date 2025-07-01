import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getJobOffers } from "api";

export default function HomeScreen({ navigation }: any) {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobOffers()
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.error("Error loading jobs:", err))
      .finally(() => setLoading(false));
  }, []);

  const renderJob = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.jobCard}
      onPress={() => navigation.navigate("JobDetails", { jobId: item.id })}
    >
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.companyName}>{item.companyName || "Company"}</Text>
      <Text numberOfLines={2} style={styles.jobDescription}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Welcome back</Text>
      {loading ? (
        <Text>Loading jobs...</Text>
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id}
          renderItem={renderJob}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  greeting: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  jobCard: {
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  jobTitle: { fontSize: 18, fontWeight: "700" },
  companyName: { fontSize: 14, fontWeight: "600", color: "#555", marginTop: 4 },
  jobDescription: { fontSize: 13, color: "#333", marginTop: 6 },
});
