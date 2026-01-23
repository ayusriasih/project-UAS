import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Penitipan from "./src/service/penitipan";
import { PenitipanCreate } from "./src/models/penitipan";

const normalizeDate = (date: string) => {
  if (!date) return "";
 return date.trim();
};

const PenitipanCreateScreen = () => {
  const navigation = useNavigation<any>();

  const [namaPemilik, setNamaPemilik] = useState("");
  const [namaHewan, setNamaHewan] = useState("");
  const [jenisHewan, setJenisHewan] = useState("");
  const [layanan, setLayanan] = useState("");
  const [tanggalMasuk, setTanggalMasuk] = useState("");
  const [tanggalKeluar, setTanggalKeluar] = useState("");
  const [harga, setHarga] = useState("");
  const [status, setstatus] = useState("");

  const handleSubmit = async () => {
    try {
      const data: PenitipanCreate = {
        nama_pemilik: namaPemilik,
        nama_hewan: namaHewan,
        jenis_hewan: jenisHewan,
        layanan: layanan,
        tanggal_masuk: normalizeDate(tanggalMasuk),
        tanggal_keluar: normalizeDate(tanggalKeluar),
        harga: Number(harga),
        status: status
      };

      await Penitipan.createPenitipan(data);

      Alert.alert("Berhasil", "Data berhasil disimpan", [
        { text: "OK", onPress: () => navigation.goBack() },
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
      <TextInput style={styles.input} onChangeText={setLayanan} />

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
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setHarga}
      />

       <Text>Status</Text>
      <TextInput style={styles.input} onChangeText={setstatus} />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Simpan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    padding: 10,
  },
  button: {
    backgroundColor: "#d90429",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
});

export default PenitipanCreateScreen;