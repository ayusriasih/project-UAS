import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Penitipan from "./src/service/penitipan";

const normalizeDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  d.setHours(d.getHours() + 7);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};


const PenitipanEditScreen = ({ route, navigation }: any) => {
  const { data } = route.params;

  const [namaPemilik, setNamaPemilik] = useState(data.nama_pemilik ?? "");
  const [namaHewan, setNamaHewan] = useState(data.nama_hewan ?? "");
  const [jenisHewan, setJenisHewan] = useState(data.jenis_hewan ?? "");
  const [layanan, setLayanan] = useState(data.layanan ?? "");
  const [tanggalMasuk, setTanggalMasuk] = useState(normalizeDate(data.tanggal_masuk));
  const [tanggalKeluar, setTanggalKeluar] = useState(normalizeDate(data.tanggal_keluar));
  const [harga, setHarga] = useState(String(data.harga ?? 0));
  const [status, setStatus] = useState(data.status ?? "dititipkan");

  const handleUpdate = async () => {
    try {
      await Penitipan.updatePenitipan(String(data.id), {
        nama_pemilik: namaPemilik,
        nama_hewan: namaHewan,
        jenis_hewan: jenisHewan,
        layanan: layanan,
        tanggal_masuk: tanggalMasuk,
        tanggal_keluar: tanggalKeluar,
        harga: Number(harga),
        status: status,
      });

      Alert.alert("Berhasil", "Data berhasil diupdate", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      console.log("ERROR UPDATE:", error);
      Alert.alert("Error", "Gagal update data");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nama Pemilik</Text>
      <TextInput style={styles.input} value={namaPemilik} onChangeText={setNamaPemilik} />

      <Text>Nama Hewan</Text>
      <TextInput style={styles.input} value={namaHewan} onChangeText={setNamaHewan} />

      <Text>Jenis Hewan</Text>
      <TextInput style={styles.input} value={jenisHewan} onChangeText={setJenisHewan} />

      <Text>Layanan</Text>
      <TextInput style={styles.input} value={layanan} onChangeText={setLayanan} />

      <Text>Tanggal Masuk</Text>
      <TextInput
        style={styles.input}
        value={tanggalMasuk}
        placeholder="YYYY-MM-DD"
        onChangeText={setTanggalMasuk}
      />

      <Text>Tanggal Keluar</Text>
      <TextInput
        style={styles.input}
        value={tanggalKeluar}
        placeholder="YYYY-MM-DD"
        onChangeText={setTanggalKeluar}
      />

      <Text>Harga</Text>
      <TextInput
        style={styles.input}
        value={harga}
        keyboardType="numeric"
        onChangeText={setHarga}
      />

      <Text>Status</Text>
      <TextInput style={styles.input} value={status} onChangeText={setStatus} />

      <Pressable style={styles.button} onPress={handleUpdate}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>
          Simpan Perubahan
        </Text>
      </Pressable>
    </View>
  );
};

export default PenitipanEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#1982c4",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 10,
  },
});
