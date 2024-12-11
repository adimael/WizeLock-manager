import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import EmailInput from "../../components/inputs/EmailInput";
import SenhaInput from "../../components/inputs/PasswordInput";
import Checkbox from "expo-checkbox";
import Styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../types/navigation";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>; // Defina o tipo de navegação

interface CustomCheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ value, onChange, label }) => (
  <View style={Styles.checkboxContainer}>
    <Checkbox value={value} onValueChange={onChange} />
    <Text style={Styles.checkboxText}>{label}</Text>
  </View>
);

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const navigation = useNavigation<LoginScreenNavigationProp>(); // Use o tipo de navegação

  const handleLogin = async () => {
    if (!email.includes("@")) {
      setError("E-mail inválido!");
      return;
    }
    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    setError(""); // Limpa o erro
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("E-mail:", email);
      console.log("Senha:", senha);
      console.log("Mantenha-me conectado:", isChecked);
    } catch (err) {
      console.error("Erro no login:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={Styles.scrollView}>
          <View style={Styles.inner}>
            <Text style={Styles.appTitle}>WizeLock Manager</Text>
            <Text style={Styles.subtitle}>
              Mantenha suas senhas seguras e protegidas.
            </Text>
            <Text style={Styles.title}>Faça Login</Text>
            {error ? <Text style={Styles.errorText}>{error}</Text> : null}
            <EmailInput value={email} onChangeText={setEmail} />
            <SenhaInput value={senha} onChangeText={setSenha} />
            <CustomCheckbox
              value={isChecked}
              onChange={setChecked}
              label="Mantenha-me conectado"
            />
            <TouchableOpacity
              style={[Styles.button, loading && Styles.buttonDisabled]}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={Styles.buttonText}>
                {loading ? "Entrando..." : "Entrar"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.buttonLink}
              onPress={() => navigation.navigate("RecuperarSenha")} // Navegar para a tela de RecuperarSenha
            >
              <Text style={Styles.buttonLinkText}>
                Esqueceu a senha? Clique aqui.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.buttonLink}
              onPress={() => navigation.navigate("Cadastro")} // Navegar para a tela de Cadastro
            >
              <Text style={Styles.buttonLinkText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
