import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TutorProfileView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tutor Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Subjects: Math, Physics</Text>
      <Text>Availability: Weekends</Text>
      <Button title="Edit" onPress={() => navigation.navigate('EditTutorOptions')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center'
  },
  header: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 15
  }
});
