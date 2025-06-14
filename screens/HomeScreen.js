// HomeScreen.js
import { StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function HomeScreen({ navigation }) {
  const { setRole, isLoggedIn, role } = useContext(AppContext);

  const handleSelection = (selectedRole) => {
    setRole(selectedRole);
    if (isLoggedIn) {
      if (selectedRole === 'learner') navigation.navigate('LearnerDashboard');
      else navigation.navigate('TutorDashboard');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tutango! 🎓</Text>
      <Text style={styles.subtext}>Choose your role to get started:</Text>
      <View style={styles.buttonContainer}>
        <Button title="I am a Learner" onPress={() => handleSelection('learner')} />
        <Button title="I am a Tutor" onPress={() => handleSelection('tutor')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtext: { fontSize: 16, color: 'gray', marginBottom: 20 },
  buttonContainer: { width: '100%', gap: 15 },
});
