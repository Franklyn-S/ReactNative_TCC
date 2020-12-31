import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const IMCForm = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [IMC, setIMC] = useState();
  const [pesoFocused, setPesoFocused] = useState(false);
  const [alturaFocused, setAlturaFocused] = useState('');
  const calculateIMC = () => setIMC(peso / (altura * altura));
  const calculaIMCIndicator = () => {
    let indicator = '';
    if (IMC <= 16.99) {
      indicator = 'Muito abaixo do peso';
    } else if (IMC >= 17 && IMC <= 18.49) {
      indicator = 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 24.99) {
      indicator = 'Peso normal';
    } else if (IMC >= 25 && IMC <= 29.99) {
      indicator = 'Sobrepeso';
    } else if (IMC >= 30 && IMC <= 34.99) {
      indicator = 'Obesidade Grau I';
    } else if (IMC >= 35 && IMC <= 40) {
      indicator = 'Obesidade Grau II';
    } else if (IMC > 40) {
      indicator = 'Obesidade Grau III';
    }
    return indicator;
  };
  const styles = StyleSheet.create({
    CalculateButton: {
      marginTop: 45,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 50,
    },
    ContainerInputStyle: {
      width: '90%',
      display: 'flex',
      alignSelf: 'center',
    },
    CalculateButtonTextStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
    },
    InputAlturaStyle: {
      paddingTop: 18,
      fontSize: 25,
      color: '#000',
      borderBottomWidth: 1,
      borderBottomColor: alturaFocused ? '#005bea' : '#555',
    },
    InputPesoStyle: {
      paddingTop: 18,
      fontSize: 25,
      color: '#000',
      borderBottomWidth: 1,
      borderBottomColor: pesoFocused ? '#005bea' : '#555',
    },
    ResultStyle: {
      fontSize: 75,
      color: '#777',
      fontWeight: 'bold',
    },
    ResultIndicatorStyle: {
      bottom: 10,
      fontSize: 30,
      color: '#777',
      fontWeight: 'bold',
    },
    ResultContainer: {
      marginTop: 30,
      display: 'flex',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
  });
  const CustomLabelStyles = {
    fontSizeFocused: 20,
    fontSizeBlurred: 25,
  };
  const LabelStyles = {
    top: 10,
  };
  const {
    CalculateButton,
    CalculateButtonTextStyle,
    ContainerInputStyle,
    InputAlturaStyle,
    InputPesoStyle,
    ResultStyle,
    ResultIndicatorStyle,
    ResultContainer,
  } = styles;
  return (
    <View style={ContainerInputStyle}>
      <FloatingLabelInput
        containerStyles={ContainerInputStyle}
        inputStyles={InputPesoStyle}
        keyboardType="decimal-pad"
        label="Peso"
        customLabelStyles={CustomLabelStyles}
        labelStyles={LabelStyles}
        value={peso}
        onChangeText={setPeso}
        onFocus={() => setPesoFocused(true)}
        onBlur={() => setPesoFocused(false)}
      />
      <FloatingLabelInput
        containerStyles={ContainerInputStyle}
        inputStyles={InputAlturaStyle}
        keyboardType="decimal-pad"
        label="Altura"
        customLabelStyles={CustomLabelStyles}
        labelStyles={LabelStyles}
        value={altura}
        onChangeText={setAltura}
        onFocus={() => setAlturaFocused(true)}
        onBlur={() => setAlturaFocused(false)}
      />
      <TouchableOpacity onPress={() => calculateIMC(peso, altura)}>
        <LinearGradient colors={['#00c6fb', '#005bea']} style={CalculateButton}>
          <Text style={CalculateButtonTextStyle}>CALCULAR IMC</Text>
        </LinearGradient>
      </TouchableOpacity>
      {IMC ? (
        <View style={ResultContainer}>
          <Text style={ResultStyle}>{IMC.toFixed(2)}</Text>
          <Text style={ResultIndicatorStyle}>
            {IMC && calculaIMCIndicator()}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default IMCForm;
