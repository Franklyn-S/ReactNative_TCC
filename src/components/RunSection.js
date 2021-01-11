import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PerfilImage from '../assets/circulo.svg';

const RunSection = ({ date, duration, navigation }) => {
  const {
    containerStyle,
    perfilStyle,
    textContainerStyle,
    dateStyle,
    durationStyle,
  } = styles;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Graphic', { date, duration })}>
      <View style={containerStyle}>
        <PerfilImage height={50} width={50} style={perfilStyle} />
        <View style={textContainerStyle}>
          <Text style={dateStyle}>{date}</Text>
          <Text style={durationStyle}>Duração: {duration} min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 15,
  },
  textContainerStyle: {
    borderBottomColor: '#757575',
    borderBottomWidth: 0.7,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 10,
    width: '75%',
  },
  perfilStyle: {
    margin: 10,
  },
  dateStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#757575',
  },
  durationStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#757575',
  },
});

export default RunSection;
