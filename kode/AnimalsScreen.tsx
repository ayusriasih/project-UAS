import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

type CategoryType = "dog" | "cat";

export default function AnimalListScreen({ route, navigation }: any) {
  // data dari HomeScreen
  const category = route.params.category as CategoryType;

  const data: Record<CategoryType, string[]> = {
    dog: ["Husky", "Pomeranian", "Golden Retriever", "Shiba Inu", "Bulldog"],
    cat: ["Persia", "Anggora", "British Shorthair", "Maine Coon", "Sphynx"]
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>
          {category === "dog" ? "Jenis Anjing" : "Jenis Kucing"}
        </Text>
      </View>

      <FlatList
        data={data[category]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FFF" },
  header: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "700" },
  itemBox: {
    backgroundColor: "#FFE0B2",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10
  },
  itemText: { fontSize: 18, fontWeight: "600" }
});
