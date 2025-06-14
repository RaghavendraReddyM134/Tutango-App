import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddSubjects({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Subjects You Teach</Text>
      <TextInput placeholder="e.g. Math, Physics, Coding" style={styles.input} />
      <Button title="Add Subjects" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});
