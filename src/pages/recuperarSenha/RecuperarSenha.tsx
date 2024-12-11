import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import EmailInput from "../../components/inputs/EmailInput";
import Styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../types/navigation";

type RecuperarSenhaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecuperarSenha'>;

const RecuperarSenha = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const navigation = useNavigation<RecuperarSenhaScreenNavigationProp>(); // Tipo de navegação para a tela de recuperação

  const handleRecuperarSenha = async () => {
    if (!email.includes("@")) {
      setError("E-mail inválido!");
      return;
    }

    setError(""); // Limpa o erro
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulando uma requisição
      setMessage("Link de recuperação enviado para o seu e-mail.");
    } catch (err) {
      setError("Ocorreu um erro ao enviar o link de recuperação.");
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
            <Text style={Styles.title}>Recuperar Senha</Text>
            {error ? <Text style={Styles.errorText}>{error}</Text> : null}
            {message ? <Text style={Styles.successText}>{message}</Text> : null}
            <EmailInput value={email} onChangeText={setEmail} />
            <TouchableOpacity
              style={[Styles.button, loading && Styles.buttonDisabled]}
              onPress={handleRecuperarSenha}
              disabled={loading}
            >
              <Text style={Styles.buttonText}>
                {loading ? "Enviando..." : "Enviar Link de Recuperação"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RecuperarSenha;
