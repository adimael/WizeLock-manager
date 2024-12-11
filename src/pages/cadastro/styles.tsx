import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF", // Fundo branco
    },
    inner: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingBottom: 30,
    },
    appTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#333333", // Título com cor escura para contraste
      textAlign: "center",
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 16,
      color: "#555555", // Subtítulo com tom cinza
      marginBottom: 40,
      textAlign: "center",
    },
    title: {
      fontSize: 24,
      color: "#333333", // Texto escuro
      marginBottom: 20,
    },
    button: {
      backgroundColor: "#5887FF", // Botão azul
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      width: "100%",
    },
    buttonText: {
      color: "#FFFFFF", // Texto do botão em branco
      fontSize: 16,
      fontWeight: "bold",
    },
    buttonDisabled: {
      backgroundColor: "#AAB7FF", // Botão desativado
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    checkboxText: {
      color: "#333333", // Texto do checkbox escuro
      fontSize: 14,
      marginLeft: 8,
    },
    buttonLink: {
      backgroundColor: "transparent", // Sem fundo
      padding: 10,
      marginBottom: 10, // Espaçamento entre os botões
      alignItems: "center",
    },
    buttonLinkText: {
      color: "#007BFF", // Azul para destaque
      fontSize: 14,
      textDecorationLine: "underline", // Sublinhado
    },
    errorText: {
      color: "#FF0000", // Texto de erro em vermelho
      fontSize: 14,
      marginBottom: 10,
      textAlign: "center",
    },
    scrollView: {
      flexGrow: 1,  // Garante que o conteúdo seja rolável
      paddingBottom: 20,  // Adiciona espaçamento extra na parte inferior
    },
  });
  
  export default Styles;
  