import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([
    { id: '1', title: 'Перша нотатка', text: 'Це приклад нотатки', category: 'Особисте' },
    { id: '2', title: 'Список покупок', text: 'Молоко, хліб, яйця', category: 'Справи' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { note: item })}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.text} numberOfLines={1}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Create', { setNotes, notes })}>
          <Text style={styles.btnText}>+ Нова нотатка</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAbout} onPress={() => navigation.navigate('About')}>
          <Text style={styles.btnText}>Про додаток</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0EFFF', padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 3 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  category: { fontSize: 12, color: '#6C63FF', marginTop: 4 },
  text: { fontSize: 14, color: '#666', marginTop: 6 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  btn: { flex: 1, backgroundColor: '#6C63FF', padding: 14, borderRadius: 12, alignItems: 'center', marginRight: 8 },
  btnAbout: { flex: 1, backgroundColor: '#999', padding: 14, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});