// SignupScreen.js
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function SignupScreen({ navigation }) {
  const { setIsLoggedIn, role } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    setIsLoggedIn(true);
    if (role === 'learner') navigation.navigate('LearnerDashboard');
    else navigation.navigate('TutorDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutango Signup</Text>
      <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
  link: { marginTop: 15, color: 'blue' },
});
