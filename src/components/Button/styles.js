import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#3B3A3B',
      marginBottom: 20,
      paddingVertical: 12,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "rgba(255,255,255,0.7)"
    },
    containerDisabled: {
        opacity: 0.4
    },
    containerEnabled: {
        opacity: 1
    },
    text: {
      color: '#FFFFFF',
      textAlign: "center",
      height: 24
  },
  remove: {
      backgroundColor: '#F55E64'
  },
  basicuvggreen: {
    backgroundColor: '#078b45',
    color: "#FFF"
  }
});

export default styles;