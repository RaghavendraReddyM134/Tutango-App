import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TutorDashboard({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor Dashboard</Text>
      <Button title="View My Profile" onPress={() => navigation.navigate('TutorProfileView')} />
      <Button title="Logout" onPress={onLogout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20
  }
});
