import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import TutorCard from '../components/TutorCard';


const dummyTutors = [
  { id: '1', name: 'Dr. Priya Sharma', subject: 'Physics', rating: 4.9, bio: 'PhD from IIT, 10+ years of teaching' },
  { id: '2', name: 'Rahul Mehta', subject: 'Mathematics', rating: 4.8, bio: 'Olympiad medalist, 8 years experience' },
  { id: '3', name: 'Anjali Rao', subject: 'English', rating: 4.7, bio: 'Certified language coach, TESOL expert' },
];

export default function LearnerDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Perfect Tutor</Text>
      <TextInput style={styles.searchBar} placeholder="Search by subject, name..." />
      <FlatList
        data={dummyTutors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TutorCard tutor={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  searchBar: {
    height: 40, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 10, marginBottom: 20, borderRadius: 8,
  },
});
