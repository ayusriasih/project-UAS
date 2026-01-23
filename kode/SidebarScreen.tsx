import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";



export default function SidebarScreen({ navigation }: any) {

  const sidebarItems = [
    {
      id: "1",
      title: "Riwayat",
      icon: "time-outline",
      onPress: () => navigation.navigate("Riwayat"),
    },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.notifBox}
      activeOpacity={0.7}
      onPress={item.onPress}
    >
      <Ionicons name={item.icon} size={24} color="#4E342E" />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.notifTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Menu</Text>
      </View>

      <FlatList
        data={sidebarItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  notifBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4E342E",
  },
});
