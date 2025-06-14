import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyLearners = [
  { id: '1', name: 'Ravi Kumar', interest: 'Python' },
  { id: '2', name: 'Sneha Patel', interest: 'Maths' },
  { id: '3', name: 'Aarav Mehta', interest: 'Physics' },
];

export default function InterestedLearners() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interested Learners</Text>
      <FlatList
        data={dummyLearners}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Interested in: {item.interest}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',
  },
  card: {
    borderWidth: 1, padding: 15, borderRadius: 8, marginBottom: 10, backgroundColor: '#f9f9f9',
  },
  name: {
    fontWeight: 'bold',
  },
});
