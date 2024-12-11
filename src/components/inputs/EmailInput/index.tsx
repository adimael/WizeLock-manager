import React from "react";
import { TextInput, View, TextInputProps } from "react-native";
import styles from "./style";

interface EmailInputProps extends TextInputProps {
  value: string; // Deve ser uma string
  onChangeText: (text: string) => void; // Função para atualizar o estado
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value} // Controlado pelo estado
        onChangeText={onChangeText} // Função para atualizar o valor
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

export default EmailInput;
