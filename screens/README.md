# 📝 Notes App

Мобільний додаток для створення та зберігання нотаток, розроблений на React Native (Expo).

## 🚀 Як запустити

### 1. Встанови залежності
npm install

### 2. Запусти проєкт
npx expo start

### 3. Відкрий на телефоні
- Завантаж додаток Expo Go з App Store або Google Play
- Відскануй QR-код який з'явиться у терміналі

## 📱 Екрани додатку

| Екран | Опис |
|-------|------|
| Home | Список всіх нотаток |
| Create | Форма створення нової нотатки |
| Detail | Перегляд окремої нотатки |
| About | Інsформація про додаток |

## 🗂 Структура папок

NotesApp/
├── screens/
│   ├── HomeScreen.js
│   ├── CreateScreen.js
│   ├── DetailScreen.js
│   └── AboutScreen.js
├── App.js
├── app.json
├── package.json
└── README.md

## ⚙️ Технології

- React Native + Expo
- React Navigation (Stack)
- React Hooks (useState)

## ✅ Функціонал

- Перегляд списку нотаток (FlatList)
- Створення нотатки (заголовок, категорія, текст)
- Валідація форми — всі поля обов'язкові
- Перегляд деталей нотатки
- Сторінка "Про додаток"
