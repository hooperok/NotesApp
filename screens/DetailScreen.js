import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { note } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.category}>{note.category}</Text>
        <Text style={styles.title}>{note.title}</Text>
        <View style={styles.divider} />
        <Text style={styles.text}>{note.text}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0EFFF', padding: 16 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 20, elevation: 3 },
  category: { fontSize: 13, color: '#6C63FF', fontWeight: 'bold', marginBottom: 8 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 16 },
  text: { fontSize: 16, color: '#555', lineHeight: 24 },
});