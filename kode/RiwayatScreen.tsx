import React, { useState, useCallback } from "react";
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Penitipan from "./src/service/penitipan";
import { Penitipan as Model } from "./src/models/penitipan";

const RiwayatScreen = ({ navigation }: any) => {
  const [penitipan, setPenitipan] = useState<Model[]>([]);

  const getPenitipan = async () => {
    try {
      const response = await Penitipan.getPenitipan();
      const data = response.data?.data ?? response.data;

      if (Array.isArray(data)) {
        setPenitipan(data);
      } else {
        setPenitipan([]);
      }
    } catch (error) {
      console.log("ERROR GET PENITIPAN:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getPenitipan();
    }, [])
  );

  const normalizeDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  d.setHours(d.getHours() + 7);
  return d.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }); 
};


  const renderItem: ListRenderItem<Model> = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("PenitipanLengkap", { id: item.id })
      }
    >
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.nama_hewan}</Text>
          <Text style={styles.desc}>Pemilik: {item.nama_pemilik}</Text>
          <Text style={styles.desc}>Jenis: {item.jenis_hewan}</Text>
          <Text style={styles.desc}>Layanan: {item.layanan}</Text>
          <Text style={styles.desc}>
            {normalizeDate(item.tanggal_masuk)} → {normalizeDate(item.tanggal_keluar)}
          </Text>
          <Text style={styles.price}>Rp {item.harga}</Text>
          <Text style={styles.desc}>Status: {item.status}</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#E65100" />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} />
        </Pressable>
        <Text style={styles.header}>Riwayat Penitipan</Text>
      </View>

      {/* LIST DATA */}
      <FlatList
        data={penitipan}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Belum ada data penitipan
          </Text>
        }
      />

      <Pressable
        style={styles.addBtn}
        onPress={() => navigation.navigate("PenitipanCreate")}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </Pressable>
    </View>
  );
};

export default RiwayatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F8F8",
    gap: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
  },
  item: {
    borderColor: "#ADB5BD",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  desc: {
    fontSize: 13,
    color: "#555",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#E65100",
    marginTop: 4,
  },
  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#1982c4",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
