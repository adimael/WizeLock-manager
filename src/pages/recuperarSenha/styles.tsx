import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    color: "#333333",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#5887FF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#CCCCCC",
  },
  buttonLink: {
    backgroundColor: "transparent",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonLinkText: {
    color: "#007BFF",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  successText: {
    color: "green",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Styles;
