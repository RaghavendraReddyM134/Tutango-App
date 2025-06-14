import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function EditTutorOptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Your Profile</Text>
      <Button title="Edit Profile" onPress={() => {}} />
      <Button title="Set Availability" onPress={() => {}} />
      <Button title="Add Subjects" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  title: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 20
  }
});
