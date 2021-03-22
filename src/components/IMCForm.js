import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const IMCForm = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [IMC, setIMC] = useState();
  const [pesoFocused, setPesoFocused] = useState(false);
  const [alturaFocused, setAlturaFocused] = useState('');
  const resultView = useRef(null);

  const calculateIMC = (weight, height) => {
    const imc = (weight / (height * height)).toFixed(2);
    setIMC(imc);
    AccessibilityInfo.announceForAccessibility(
      `Seu IMC é ${imc} e você está ${calculaIMCIndicator()}`
    );
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
      marginBottom: 20,
    },
    InputPesoStyle: {
      paddingTop: 18,
      fontSize: 25,
      color: '#000',
      borderBottomWidth: 1,
      borderBottomColor: pesoFocused ? '#005bea' : '#555',
      marginBottom: 20,
    },
    ResultStyle: {
      fontSize: 75,
      color: '#404A50',
      fontWeight: 'bold',
    },
    ResultIndicatorStyle: {
      bottom: 10,
      fontSize: 30,
      color: '#404A50',
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
    topFocused: -30,
  };
  const LabelStyles = {
    top: 25,
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

  const calculaIMCIndicator = useCallback(() => {
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
  }, [IMC]);

  return (
    <View style={ContainerInputStyle}>
      <FloatingLabelInput
        accessible={true}
        accessibilityHint="Digite seu Peso"
        containerStyles={ContainerInputStyle}
        inputStyles={InputPesoStyle}
        keyboardType="decimal-pad"
        customLabelStyles={CustomLabelStyles}
        labelStyles={LabelStyles}
        label="Peso"
        accessibilityValue={{ now: peso }}
        value={peso}
        onChangeText={setPeso}
        onFocus={() => setPesoFocused(true)}
        onBlur={() => setPesoFocused(false)}
      />
      <FloatingLabelInput
        accessible={true}
        accessibilityHint="Digite sua Altura"
        label="Altura"
        accessibilityValue={{ now: altura }}
        containerStyles={ContainerInputStyle}
        inputStyles={InputAlturaStyle}
        keyboardType="decimal-pad"
        customLabelStyles={CustomLabelStyles}
        labelStyles={LabelStyles}
        value={altura}
        onChangeText={a => setAltura(a.replace(',', '.'))}
        onFocus={() => setAlturaFocused(true)}
        onBlur={() => setAlturaFocused(false)}
      />
      <TouchableOpacity onPress={() => calculateIMC(peso, altura)}>
        <LinearGradient colors={['#006EED', '#005bea']} style={CalculateButton}>
          <Text style={CalculateButtonTextStyle}>CALCULAR IMC</Text>
        </LinearGradient>
      </TouchableOpacity>
      {IMC ? (
        <View ref={resultView} style={ResultContainer} accessible={true}>
          <Text style={ResultStyle}>{IMC}</Text>
          <Text style={ResultIndicatorStyle}>
            {IMC && calculaIMCIndicator()}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default IMCForm;
