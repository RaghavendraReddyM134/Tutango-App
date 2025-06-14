import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SetAvailability({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Availability</Text>
      <TextInput placeholder="e.g. Weekdays, 5pm - 8pm" style={styles.input} />
      <Button title="Save Availability" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});
