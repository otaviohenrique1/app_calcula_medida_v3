import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import Traco from '../components/Traco';

export default function Homepage2() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_titulo}>App Calculadora</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.form_group}>
          <TextInput
            keyboardType='number-pad'
            placeholder='Campo A'
            style={styles.form_input}
          />
          <Traco />
          <TextInput
            keyboardType='number-pad'
            placeholder='Campo B'
            style={styles.form_input}
          />
        </View>
        <View style={styles.form_group}>
          <TextInput
            keyboardType='number-pad'
            placeholder='Campo C'
            style={styles.form_input}
          />
          <Traco />
          <TextInput
            keyboardType='default'
            placeholder='Campo X'
            style={styles.form_input}
          />
        </View>
        <View style={styles.form_group}>
          <TouchableHighlight style={[styles.form_botao, styles.form_botao_calcular]}>
            <Text style={styles.form_button_texto}>Calcular</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.form_botao, styles.form_botao_limpar]}>
            <Text style={styles.form_button_texto}>Limpar</Text>
          </TouchableHighlight>
        </View>
        <Text>Resultado</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "column",
    // justifyContent: 'center',
  },
  header: {
    padding: 16,
    backgroundColor: "cadetblue",
  },
  header_titulo: {
    fontSize: 24,
    color: "white",
  },
  main: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  form_group: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 10,
    marginBottom: 16
  },
  form_input: {
    fontSize: 22,
    borderColor: "black",
    borderWidth: 1,
    padding: 16,
    width: 140,
    borderRadius: 8,
  },
  form_botao: {
    borderRadius: 8,
    padding: 16,
    width: 120,
    alignItems: "center",
  },
  form_button_texto: {
    fontSize: 22,
    color: "white",
  },
  form_botao_calcular: {
    backgroundColor: "blue",
  },
  form_botao_limpar: {
    backgroundColor: "red",
  },
});
