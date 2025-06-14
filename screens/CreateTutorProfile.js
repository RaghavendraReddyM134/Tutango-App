import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateTutorProfile({ navigation, onComplete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Tutor Profile</Text>
      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Subjects" style={styles.input} />
      <TextInput placeholder="Availability" style={styles.input} />
      <Button
        title="Save Profile"
        onPress={() => {
          onComplete();
          navigation.replace('TutorDashboard');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20
  },
  input: {
    borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 15
  }
});
