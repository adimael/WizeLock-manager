import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";  // Importando useNavigation
import EmailInput from "../../components/inputs/EmailInput";
import SenhaInput from "../../components/inputs/PasswordInput";
import Checkbox from "expo-checkbox";
import Styles from "./styles";

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

const Cadastro = () => {
  const navigation = useNavigation();  // Usando o hook useNavigation
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleCadastro = async () => {
    if (!email.includes("@")) {
      setError("E-mail inválido!");
      return;
    }
    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres!");
      return;
    }
    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    setError(""); // Limpa o erro
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("E-mail:", email);
      console.log("Senha:", senha);
      console.log("Confirmar Senha:", confirmarSenha);
      console.log("Aceitar Termos:", isChecked);
    } catch (err) {
      console.error("Erro no cadastro:", err);
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
            <Text style={Styles.title}>Cadastre-se</Text>
            {error ? <Text style={Styles.errorText}>{error}</Text> : null}
            <EmailInput value={email} onChangeText={setEmail} />
            <SenhaInput value={senha} onChangeText={setSenha} />
            <SenhaInput
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirme sua senha"
            />
            <CustomCheckbox
              value={isChecked}
              onChange={setChecked}
              label="Aceito os termos e condições"
            />
            <TouchableOpacity
              style={[Styles.button, loading && Styles.buttonDisabled]}
              onPress={handleCadastro}
              disabled={loading}
            >
              <Text style={Styles.buttonText}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;
