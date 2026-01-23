import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Penitipan from './src/service/penitipan';
import {Penitipan as PenitipanModel } from './src/models/penitipan';

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

      {/* INFO SLIDER */}
      <Text style={styles.sectionTitle}>📢 Info & Promo</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 25 }}
      >
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
        <View style={styles.categoryDog}>
          <Ionicons name="paw" size={40} color="#4E342E" />
          <Text style={styles.categoryText}>Anjing</Text>
        </View>

        <View style={styles.categoryCat}>
          <Ionicons name="logo-octocat" size={40} color="#4E342E" />
          <Text style={styles.categoryText}>Kucing</Text>
        </View>
      </View>

      {/* SERVICES */}
      <Text style={styles.sectionTitle}>⭐ Layanan Unggulan</Text>

      {[
        {
          title: 'Penitipan Harian',
          desc: 'Tempat aman & nyaman seperti rumah sendiri.',
          price: 'Rp 80.000 / hari',
          img: require('./assets/Penitipan.jpg'),
        },
        {
          title: 'Grooming Lengkap',
          desc: 'Mandi, potong kuku, sisir bulu + parfum.',
          price: 'Rp 60.000',
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

          <TouchableOpacity style={styles.btnAdd}>
            <Ionicons name="add" size={26} color="#fff" />
          </TouchableOpacity>  
        </View>
      ))}
    </ScrollView>
  );
}

// =================== STYLES ===================

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
    marginTop: 10,
    marginBottom: 20,
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E65100',
  },

  promoBanner: {
    position: 'relative',
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
    right: 15,
  },

  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  bannerDesc: {
    fontSize: 13,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginTop: 3,
    width: 260,
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
    marginBottom: 10,
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
    marginBottom: 25,
    elevation: 4,
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
    marginTop: 3,
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
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
