import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NotificationScreen({ navigation }: any) {

  const notifications = [
    {
      id: "1",
      title: "Promo Grooming Spesial!",
      message: "Diskon 25% untuk grooming lengkap minggu ini. Ajak hewan peliharaanmu tampil wangi!",
      time: "2 jam lalu"
    },
    {
      id: "2",
      title: "Diskon Mandikan Kucing",
      message: "hanya Rp 50.000 hari ini. Buruan sebelum penuh!",
      time: "1 hari lalu"
    },
    {
      id: "3",
      title: "Paket Grooming Hemat",
      message: "Grooming + Vitamin hanya Rp 45.000. Promo terbatas!",
      time: "2 hari lalu"
    },
    {
      id: "4",
      title: "Voucher Cashback 20%",
      message: "Dapatkan cashback untuk transaksi pertama kamu!",
      time: "4 hari lalu"
    },
    {
      id: "5",
      title: "Diskon Member Baru",
      message: "Daftar member sekarang dan dapatkan diskon 30%.",
      time: "1 minggu lalu"
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.notifBox}>
      <Ionicons name="notifications" size={26} color="#4E342E" />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.notifTitle}>{item.title}</Text>
        <Text style={styles.notifMessage}>{item.message}</Text>
        <Text style={styles.notifTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifikasi</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

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
    paddingBottom: 14,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  notifBox: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "flex-start",
  },

  notifTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },

  notifMessage: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },

  notifTime: {
    fontSize: 12,
    color: "#999",
  },
});
