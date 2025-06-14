import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile({ navigation }) {
  const saveProfile = async () => {
    await AsyncStorage.setItem('tutorProfile', JSON.stringify({ name: 'Updated Tutor' }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Bio" style={styles.input} multiline />
      <Button title="Save" onPress={saveProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});
