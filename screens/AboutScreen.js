import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>📝</Text>
        <Text style={styles.title}>Notes App</Text>
        <Text style={styles.version}>Версія 1.0.0</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Простий додаток для створення та зберігання нотаток. 
          Організовуй свої думки, задачі та ідеї в одному місці.
        </Text>
        <View style={styles.divider} />
        <Text style={styles.label}>Технології:</Text>
        <Text style={styles.tech}>⚛️ React Native (Expo)</Text>
        <Text style={styles.tech}>🧭 React Navigation (Stack)</Text>
        <Text style={styles.tech}>💾 Local State (useState)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0EFFF', padding: 16, justifyContent: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 24, elevation: 3, alignItems: 'center' },
  emoji: { fontSize: 60, marginBottom: 12 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333' },
  version: { fontSize: 14, color: '#999', marginTop: 4 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 16, width: '100%' },
  description: { fontSize: 15, color: '#555', textAlign: 'center', lineHeight: 22 },
  label: { fontSize: 15, fontWeight: 'bold', color: '#444', marginBottom: 10 },
  tech: { fontSize: 14, color: '#6C63FF', marginBottom: 6 },
});