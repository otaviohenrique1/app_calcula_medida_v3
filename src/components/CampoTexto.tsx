import React from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, View } from 'react-native';

export interface CampoTextoProps {
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
  onChangeText: ((text: string) => void);
  onBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
  value: string;
  errors: any
}

export default function CampoTexto(props: CampoTextoProps) {
  const {keyboardType, placeholder, onChangeText, onBlur, value, errors} = props;

  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.form_input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
      {errors ? <Text style={styles.form_input_erro}>{errors}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  form_input: {
    fontSize: 22,
    borderColor: "black",
    borderWidth: 1,
    padding: 16,
    width: 140,
    borderRadius: 8,
  },
  form_input_erro: {
    color: "red"
  }
});