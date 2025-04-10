import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Users, Bed, Stethoscope, Bike, ChefHat, Menu as MenuIcon } from 'lucide-react-native';

const menuItems = [
  { title: 'Menu', icon: MenuIcon },
  { title: 'Staff', icon: Users },
  { title: 'Patient', icon: Bed },
  { title: 'Dietitian', icon: Stethoscope },
  { title: 'Delivery', icon: Bike },
  { title: 'Kitchen', icon: ChefHat },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>
      <View style={styles.grid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <item.icon size={32} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>{item.title}{'\nManage'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#166534',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 160,
  },
  iconContainer: {
    marginBottom: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});