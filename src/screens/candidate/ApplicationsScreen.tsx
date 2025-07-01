import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getApplicationsByUser, getJobOffer } from "api";
import { useAuth } from "../../context/AuthContext";

interface Application {
  id: string;
  offer_id: string;
  cover_letter: string;
  matching_score: number;
  created_at: string;
  title?: string;
  description?: string;
}

export default function ApplicationsScreen() {
  const { user } = useAuth();
  const userId = user?.id;

  

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedAppId, setExpandedAppId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🔍 USER:", user);
    console.log("📌 USER ID:", userId);
    if (!userId) {
      setLoading(false);
      setApplications([]);
      return;
    }

    async function fetchApplications() {
      setLoading(true);
      setError(null);
      try {
        const res = await getApplicationsByUser(userId);

        // Log to verify response shape
        console.log("Applications response:", res);

        // Adjust if your API returns data directly or nested
        const apps: Application[] = res.data || res; 

        if (!Array.isArray(apps)) throw new Error("Applications data is not an array");

        // Get unique job offer IDs
        const jobIds = Array.from(new Set(apps.map((app) => app.offer_id)));

        // Fetch all job offers in parallel
        const jobsData = await Promise.all(
          jobIds.map((id) =>
            getJobOffer(id)
              .then((res) => {
                // Log each job offer response
                console.log(`Job offer ${id}:`, res);
                return res.data || res;
              })
              .catch(() => null)
          )
        );

        // Build map for quick lookup
        const jobMap = new Map<string, { title: string; description: string }>();
        jobsData.forEach((job) => {
          if (job?.id) {
            jobMap.set(job.id, {
              title: job.title,
              description: job.description,
            });
          }
        });

        // Merge app + job details
        const appsWithDetails = apps.map((app) => ({
          ...app,
          title: jobMap.get(app.offer_id)?.title || "Unknown Title",
          description: jobMap.get(app.offer_id)?.description || "No description",
        }));

        setApplications(appsWithDetails);
      } catch (err: any) {
        console.error("Failed to fetch applications:", err);
        setError("Failed to load applications. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, [userId]);

  const toggleExpand = (id: string) => {
    setExpandedAppId((prev) => (prev === id ? null : id));
  };

  const renderItem = ({ item }: { item: Application }) => {
    const isExpanded = expandedAppId === item.id;

    return (
      <TouchableOpacity style={styles.card} onPress={() => toggleExpand(item.id)}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.meta}>
          Applied: {new Date(item.created_at).toLocaleDateString()}
        </Text>
        <Text style={styles.meta}>Match Score: {item.matching_score.toFixed(2)}</Text>

        {isExpanded && (
          <View style={styles.letterBox}>
            <Text style={styles.coverLabel}>Cover Letter:</Text>
            <Text style={styles.cover}>{item.cover_letter}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </SafeAreaView>
    );
  }

  if (!applications.length) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.empty}>No applications found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Applications</Text>
      <FlatList
        data={applications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  description: { marginTop: 4, color: "#333" },
  meta: { marginTop: 6, fontSize: 13, color: "#666" },
  letterBox: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  coverLabel: { fontWeight: "600", marginBottom: 4 },
  cover: { fontSize: 14, color: "#444" },
  empty: { textAlign: "center", marginTop: 40, fontSize: 16, color: "#888" },
  error: { textAlign: "center", marginTop: 40, fontSize: 16, color: "red" },
});
