import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
      }}>
        <TextInput keyboardType='number-pad' placeholder='Campo A' />
        <Text>----</Text>
        <TextInput keyboardType='number-pad' placeholder='Campo B' />
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
      }}>
        <TextInput keyboardType='number-pad' placeholder='Campo C' />
        <Text>----</Text>
        <TextInput keyboardType='default' placeholder='Campo X' />
      </View>
      <Text>Resultado</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
