import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CartScreen({ navigation }: { navigation: any }) {

  const cartItems = [
    { id: "1", name: "Grooming Lengkap Anjing", price: 75000 },
    { id: "2", name: "Penitipan Kucing (1 Hari)", price: 50000 },
    { id: "3", name: "Mandi + Potong Kuku", price: 30000 },
  ];

  const renderItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={styles.itemBox}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Rp {item.price.toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Keranjang Layanan</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 10 }}
      />

      <TouchableOpacity style={styles.checkoutBtn} onPress={() => Alert.alert("Checkout demo berhasil!")}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}


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
    paddingBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  itemBox: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4E342E",
  },

  checkoutBtn: {
    backgroundColor: "#4E342E",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  checkoutText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  }
});
