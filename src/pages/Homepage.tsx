import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import Traco from '../components/Traco';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CampoTexto from '../components/CampoTexto';

interface FormTypes {
  campoA: string;
  campoB: string;
  campoC: string;
  campoD: string;
}

const valoresIniciais: FormTypes = {
  campoA: '',
  campoB: '',
  campoC: '',
  campoD: ''
};

const SchemaValidacao = Yup.object().shape({
  campoA: Yup.string().required('Campo vazio'),
  campoB: Yup.string().required('Campo vazio'),
  campoC: Yup.string().required('Campo vazio'),
  campoD: Yup.string().required('Campo vazio'),
});

export default function Homepage() {
  
  function onSubmitForm(values: FormTypes) {
    console.log(values)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_titulo}>App Calculadora</Text>
      </View>
      <Formik
        initialValues={valoresIniciais}
        onSubmit={onSubmitForm}
        validationSchema={SchemaValidacao}
      >
        {({ errors ,values, handleChange, handleBlur, handleSubmit, resetForm,  }) => {
          return (
            <View style={styles.main}>
              <View style={styles.form_group}>
                <CampoTexto
                  keyboardType='number-pad'
                  placeholder='Campo A'
                  onChangeText={handleChange('campoA')}
                  onBlur={handleBlur('campoA')}
                  value={values.campoA}
                  errors={errors.campoA}
                />
                <Traco />
                <CampoTexto
                  keyboardType='number-pad'
                  placeholder='Campo B'
                  onChangeText={handleChange('campoB')}
                  onBlur={handleBlur('campoB')}
                  value={values.campoB}
                  errors={errors.campoB}
                />
              </View>
              <View style={styles.form_group}>
                <CampoTexto
                  keyboardType='number-pad'
                  placeholder='Campo C'
                  onChangeText={handleChange('campoC')}
                  onBlur={handleBlur('campoC')}
                  value={values.campoC}
                  errors={errors.campoC}
                />
                <Traco />
                <CampoTexto
                  keyboardType='default'
                  placeholder='Campo X'
                  onChangeText={handleChange('campoD')}
                  onBlur={handleBlur('campoD')}
                  value={values.campoD}
                  errors={errors.campoD}
                />
              </View>
              <View style={styles.form_group}>
                <TouchableHighlight
                  style={[styles.form_botao, styles.form_botao_calcular]}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.form_button_texto}>Calcular</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.form_botao, styles.form_botao_limpar]}
                  onPress={() => resetForm()}
                >
                  <Text style={styles.form_button_texto}>Limpar</Text>
                </TouchableHighlight>
              </View>
              <Text>Resultado</Text>
            </View>
          );
        }}
      </Formik>
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
