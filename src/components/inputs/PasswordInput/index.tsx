import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./style";

interface SenhaInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const PasswordInput: React.FC<SenhaInputProps> = ({ value, onChangeText, placeholder = "Digite sua senha" }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        secureTextEntry={true} // Esconde a senha
      />
    </View>
  );
};

export default PasswordInput;
