// components/TutorCard.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TutorCard({ tutor }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{tutor.name}</Text>
      <Text style={styles.subject}>{tutor.subject}</Text>
      <Text style={styles.rating}>⭐ {tutor.rating}</Text>
      <Text style={styles.bio}>{tutor.bio}</Text>
      <View style={styles.actions}>
        <Button title="View Profile" onPress={() => {}} />
        <Button title="Book Session" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  subject: { color: '#666' },
  rating: { marginTop: 5 },
  bio: { marginTop: 10, fontStyle: 'italic' },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
