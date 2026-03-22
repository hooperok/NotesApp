import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CreateScreen({ navigation, route }) {
  const { setNotes, notes } = route.params;
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Помилка', 'Заголовок не може бути пустим!');
      return;
    }
    if (!text.trim()) {
      Alert.alert('Помилка', 'Текст нотатки не може бути пустим!');
      return;
    }
    if (!category.trim()) {
      Alert.alert('Помилка', 'Категорія не може бути пустою!');
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title: title.trim(),
      text: text.trim(),
      category: category.trim(),
    };

    setNotes([...notes, newNote]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Заголовок *</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть заголовок..."
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Категорія *</Text>
      <TextInput
        style={styles.input}
        placeholder="Наприклад: Робота, Особисте..."
        value={category}
        onChangeText={setCategory}
      />
      <Text style={styles.label}>Текст нотатки *</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Введіть текст нотатки..."
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Зберегти нотатку</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0EFFF', padding: 16 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#444', marginBottom: 6, marginTop: 12 },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 12, fontSize: 15, elevation: 2 },
  textArea: { height: 120, textAlignVertical: 'top' },
  btn: { backgroundColor: '#6C63FF', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});