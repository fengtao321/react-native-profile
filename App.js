import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import UserForm from './components/UserForm';

export default function App() {
  return (
    <View style={styles.container}>
      <UserForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
