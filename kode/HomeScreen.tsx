import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      {/* TOP ICON BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
          <Ionicons name="menu-outline" size={30} color="#000" />
        </TouchableOpacity>

        <Text style={styles.logo}>HappyPaws</Text>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications-outline" size={30} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Ionicons name="cart-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* PROMO BANNER */}
      <View style={styles.promoBanner}>
        <Image
          source={require('./assets/promo.jpg')}
          style={styles.bannerImg}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>Promo Penitipan 20% OFF</Text>
          <Text style={styles.bannerDesc}>
            Berlaku hingga akhir bulan. Yuk titipin hewanmu!
          </Text>
        </View>
      </View>

      {/* INFO */}
      <Text style={styles.sectionTitle}>📢 Info & Promo</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            💡 Hewan wajib vaksin sebelum penitipan.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            🔥 Free grooming untuk penitipan lebih dari 3 hari!
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            🎁 Cashback 10% untuk pelanggan baru.
          </Text>
        </View>
      </ScrollView>

      {/* CATEGORY */}
      <Text style={styles.sectionTitle}>🐾 Kategori Hewan</Text>

      <View style={styles.categoryRow}>
        <TouchableOpacity
        style={styles.categoryDog}
        onPress={() => navigation.navigate("Animals", { category: "dog" })}
      >
      <Ionicons name="paw" size={40} color="#4E342E" />
      <Text style={styles.categoryText}>Anjing</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.categoryCat}
      onPress={() => navigation.navigate("Animals", { category: "cat" })}
      >
      <Ionicons name="logo-octocat" size={40} color="#4E342E" />
      <Text style={styles.categoryText}>Kucing</Text>
      </TouchableOpacity>

      </View>

      {/* SERVICES */}
      <Text style={styles.sectionTitle}>⭐ Layanan Unggulan</Text>

      {[
        {
          title: 'Penitipan Anjing (1 Hari)',
          desc: 'Tempat aman & nyaman seperti rumah sendiri.',
          price: 'Rp 70.000 / hari',
          img: require('./assets/Penitipan.jpg'),
        },
        {
          title: 'Grooming Lengkap',
          desc: 'Mandi, potong kuku, sisir bulu + parfum.',
          price: 'Rp 70.000',
          img: require('./assets/grooming.jpg'),
        },
      ].map((item, i) => (
        <View key={i} style={styles.serviceCard}>
          <Image source={item.img} style={styles.serviceImg} />

          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{item.title}</Text>
            <Text style={styles.serviceDesc}>{item.desc}</Text>
            <Text style={styles.servicePrice}>{item.price}</Text>
          </View>

         <TouchableOpacity
  style={styles.btnAdd}
  onPress={() => {
    // ambil data cart lama (kalau ada)
    const existingCart = navigation.getState()?.routes?.find(
      (r: any) => r.name === "Cart"
    )?.params?.cartItems || [];

    // item baru yang diklik
    const newItem = {
      id: Date.now().toString(),
      name: item.title,
      price: parseInt(item.price.replace(/[^\d]/g, "")),
    };

    // navigasi ke Cart sambil kirim semua item
    navigation.navigate("Cart", {
      cartItems: [...existingCart, newItem],
    });
  }}
>
  <Ionicons name="add" size={26} color="#fff" />
</TouchableOpacity>


        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8E1',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E65100',
  },
  promoBanner: {
    marginBottom: 25,
  },
  bannerImg: {
    width: '100%',
    height: 160,
    borderRadius: 18,
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 15,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerDesc: {
    fontSize: 13,
    color: '#fff',
  },
  infoCard: {
    backgroundColor: '#FFE0B2',
    padding: 15,
    borderRadius: 15,
    marginRight: 15,
    width: 250,
  },
  infoText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4E342E',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 10,
    color: '#E65100',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  categoryDog: {
    width: '48%',
    backgroundColor: '#FFB74D',
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  categoryCat: {
    width: '48%',
    backgroundColor: '#FFCC80',
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '700',
    color: '#4E342E',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceImg: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#BF360C',
  },
  serviceDesc: {
    fontSize: 12,
    color: '#6D4C41',
  },
  servicePrice: {
    color: '#E65100',
    fontWeight: '700',
    marginTop: 6,
  },
  btnAdd: {
    width: 42,
    height: 42,
    backgroundColor: '#E65100',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
