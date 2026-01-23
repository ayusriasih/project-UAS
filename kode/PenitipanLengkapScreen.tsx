import React, { useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Penitipan from "./src/service/penitipan";

const PenitipanLengkapScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const [data, setData] = useState<any>(null);

  const normalizeDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  d.setHours(d.getHours() + 7);
  return d.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }); 
};


  const getDetail = async () => {
    try {
      const res = await Penitipan.getPenitipanById(id);
      setData(res.data?.[0] ?? res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
      useCallback(() => {
    getDetail();
  }, [])
  );
  const handleDelete = () => {
    Alert.alert("Hapus Data", "Yakin ingin menghapus data ini?", [
      { text: "Batal" },
      {
        text: "Hapus",
        style: "destructive",
        onPress: async () => {
          await Penitipan.deletePenitipan(String(id));
          Alert.alert("Berhasil", "Data berhasil dihapus");
          navigation.goBack();
        },
      },
    ]);
  };

  if (!data) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nama_hewan}</Text>

      <Text>Pemilik: {data.nama_pemilik}</Text>
      <Text>Jenis: {data.jenis_hewan}</Text>
      <Text>Layanan: {data.layanan}</Text>
      <Text>Tanggal Masuk: {normalizeDate(data.tanggal_masuk)}</Text>
      <Text>Tanggal Keluar: {normalizeDate(data.tanggal_keluar)}</Text>
      <Text>Harga: Rp {data.harga}</Text>
      <Text>Status: {data.status}</Text>

      {/* EDIT */}
      <Pressable
        style={styles.editBtn}
        onPress={() => navigation.navigate("PenitipanEdit", { data })}
      >
        <Text style={styles.btnText}>Edit</Text>
      </Pressable>

      {/* DELETE */}
      <Pressable style={styles.deleteBtn} onPress={handleDelete}>
        <Text style={styles.btnText}>Hapus</Text>
      </Pressable>
    </View>
  );
};

export default PenitipanLengkapScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  editBtn: {
    backgroundColor: "#1976D2",
    padding: 12,
    borderRadius: 6,
    marginTop: 16,
    alignItems: "center",
  },
  deleteBtn: {
    backgroundColor: "#D32F2F",
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "700" },
});
