import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LeftArrow from '../assets/seta.svg';
import Graphic from '../assets/grafico.svg';

const GraphicScreen = ({ route, navigation }) => {
  const { duration } = route.params;
  const {
    backButton,
    info,
    subtitle,
    flexbox,
    titulo,
    graphicWrapper,
    graphic,
    verticalLine,
    horizontalLine,
    unidadeStyle,
    viewItens,
  } = styles;
  return (
    <View>
      <View style={verticalLine} />
      <View style={horizontalLine} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Tabs')}
        style={backButton}
        accessible={true}
        accessibilityLabel="Voltar"
        accessibilityHint="Volta para a tela anterior">
        <LeftArrow height="48" width="48" />
      </TouchableOpacity>
      <Text style={titulo}>10/10</Text>
      <View style={graphicWrapper}>
        <Graphic style={graphic} width={'100%'} heigh={'100%'} />
      </View>
      <View style={flexbox}>
        <View style={viewItens} accessible={true}>
          <Text style={info}>8453</Text>
          <Text style={subtitle}>Passos</Text>
        </View>
        <View style={viewItens} accessible={true}>
          <Text style={info}>{duration}</Text>
          <Text style={subtitle}>Duração</Text>
        </View>
      </View>
      <View style={flexbox}>
        <View style={viewItens} accessible={true}>
          <Text style={info}>
            3.72 <Text style={unidadeStyle}>km</Text>
          </Text>
          <Text style={subtitle}>Distância</Text>
        </View>
        <View style={viewItens} accessible={true}>
          <Text style={info}>
            908 <Text style={unidadeStyle}>kcal</Text>
          </Text>
          <Text style={subtitle}>Calorias</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 50,
    zIndex: 99999,
  },
  graphicWrapper: {
    width: '100%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphic: {
    zIndex: 1,
  },
  verticalLine: {
    position: 'absolute',
    width: 1,
    height: '100%',
    backgroundColor: '#00000054',
    left: '50%',
    top: '10%',
  },
  horizontalLine: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#00000054',
    left: '0%',
    top: '75%',
  },
  info: {
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#333333c9',
  },
  subtitle: {
    fontSize: 25,
    color: '#333333c9',
    fontWeight: '400',
    textAlign: 'center',
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    height: '25%',
  },
  titulo: {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    left: '42%',
    top: 20,
    fontWeight: 'bold',
    zIndex: 2,
  },
  unidadeStyle: {
    fontSize: 30,
    paddingLeft: 5,
  },
  viewItens: {
    top: '15%',
  },
});

export default GraphicScreen;
