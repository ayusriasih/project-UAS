import React, { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Penitipan from "./src/service/penitipan";
import { PenitipanCreate } from "./src/models/penitipan";

const normalizeDate = (date: string) => {
  if (!date) return "";
  return date.trim();
};

const PenitipanCreateScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const [namaPemilik, setNamaPemilik] = useState("");
  const [namaHewan, setNamaHewan] = useState("");
  const [jenisHewan, setJenisHewan] = useState("");
  const [layanan, setLayanan] = useState("");
  const [tanggalMasuk, setTanggalMasuk] = useState("");
  const [tanggalKeluar, setTanggalKeluar] = useState("");
  const [harga, setHarga] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (route.params) {
      setLayanan(route.params.layanan || "");
      setHarga(route.params.harga?.toString() || "");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const data: PenitipanCreate = {
        nama_pemilik: namaPemilik,
        nama_hewan: namaHewan,
        jenis_hewan: jenisHewan,
        layanan,
        tanggal_masuk: normalizeDate(tanggalMasuk),
        tanggal_keluar: normalizeDate(tanggalKeluar),
        harga: Number(harga),
        status,
      };

      await Penitipan.createPenitipan(data);

      Alert.alert("Berhasil", "Data berhasil disimpan", [
        { text: "OK", onPress: () => navigation.replace("Riwayat") },
      ]);
    } catch (error) {
      console.log("ERROR SIMPAN:", error);
      Alert.alert("Error", "Gagal menyimpan data");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nama Pemilik</Text>
      <TextInput style={styles.input} onChangeText={setNamaPemilik} />

      <Text>Nama Hewan</Text>
      <TextInput style={styles.input} onChangeText={setNamaHewan} />

      <Text>Jenis Hewan</Text>
      <TextInput style={styles.input} onChangeText={setJenisHewan} />

      <Text>Layanan</Text>
      <TextInput style={styles.input} value={layanan} editable={false} />

      <Text>Tanggal Masuk</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        onChangeText={setTanggalMasuk}
      />

      <Text>Tanggal Keluar</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        onChangeText={setTanggalKeluar}
      />

      <Text>Harga</Text>
      <TextInput style={styles.input} value={harga} editable={false} />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Simpan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, gap: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#F2F2F2",
  },
  button: {
    backgroundColor: "#d90429",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },
});

export default PenitipanCreateScreen;
