import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Progress from '../assets/progress.svg';
import PerfilImage from '../assets/circulo.svg';
import Steps from '../assets/steps.svg';
import Fire from '../assets/fire.svg';
import Bluetooth from '../assets/bluetooth.svg';

const HomeScreen = ({ navigation }) => {
  const {
    viewStyle,
    perfilAndProgressStyle,
    progressStyle,
    perfilStyle,
    infosStyle,
    numbers,
    pulseiraStyle,
    pulseiraText,
    StartButton,
    StartButtonTextStyle,
  } = styles;

  return (
    <View style={viewStyle}>
      <View style={perfilAndProgressStyle}>
        <Progress height={300} width={300} style={progressStyle} />
        <PerfilImage height={220} width={220} style={perfilStyle} />
      </View>
      <View style={infosStyle}>
        <View style={infosStyle}>
          <Steps height={50} width={50} />
          <Text style={numbers}>7455</Text>
        </View>
        <View style={infosStyle}>
          <Fire height={50} width={50} />
          <Text style={numbers}>1127</Text>
        </View>
      </View>
      <View style={pulseiraStyle}>
        <Text style={pulseiraText}>PULSEIRA CONECTADA</Text>
        <Bluetooth />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Run')}>
        <LinearGradient colors={['#00c6fb', '#005bea']} style={StartButton}>
          <Text style={StartButtonTextStyle}>COMEÇAR</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  perfilAndProgressStyle: {
    marginBottom: 40,
  },
  progressStyle: {
    left: '15%',
  },
  perfilStyle: {
    position: 'absolute',
    top: '20%',
    left: '24%',
  },
  infosStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
  },
  numbers: {
    marginLeft: 10,
    color: '#757575',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pulseiraStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  pulseiraText: {
    color: '#757575',
    marginRight: 5,
    fontWeight: '300',
    fontSize: 17,
  },
  StartButton: {
    marginTop: 45,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 50,
  },
  StartButtonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
