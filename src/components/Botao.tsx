import React, { ReactNode } from 'react';
import { ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight } from 'react-native';

export interface BotaoProps {
  onPress?: ((event: GestureResponderEvent) => void);
  backgroundColor: ColorValue;
  fontColor: ColorValue;
  label: string
}

export default function Botao(props: BotaoProps) {
  const { onPress, backgroundColor, fontColor, label } = props;

  return (
    <TouchableHighlight
      style={[styles.form_botao, {
        backgroundColor: backgroundColor,
      }]}
      onPress={onPress}
    >
      <Text style={[styles.form_button_texto, {
        color: fontColor,
      }]}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  form_botao: {
    borderRadius: 8,
    padding: 16,
    width: 120,
    alignItems: "center",
  },
  form_button_texto: {
    fontSize: 22,
  },
});