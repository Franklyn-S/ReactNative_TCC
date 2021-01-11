import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Clock from '../assets/clock.svg';
import Fire from '../assets/fire.svg';
import Heart from '../assets/valentines-heart.svg';
import Pause from '../assets/pause.svg';
import Play from '../assets/play.svg';
import Stop from '../assets/stop.svg';

const RunScreen = () => {
  // const [distance, setDistance] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const {
    containerStyle,
    titleStyle,
    distanceStyle,
    kmStyle,
    infosStyle,
    infoContainer,
    infosImgStyle,
    infosTextStyle,
    buttonsStyle,
    buttonsStyleRunning,
  } = styles;
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Corrida</Text>
      <Text style={distanceStyle}>
        0.0 <Text style={kmStyle}>km</Text>
      </Text>
      <View style={infosStyle}>
        <View style={infoContainer}>
          <Clock style={infosImgStyle} height={30} width={30} />
          <Text style={infosTextStyle}>00:00</Text>
        </View>
        <View style={infoContainer}>
          <Fire style={infosImgStyle} height={30} width={30} />
          <Text style={infosTextStyle}>0 kcal</Text>
        </View>
        <View style={infoContainer}>
          <Heart style={infosImgStyle} height={30} width={30} />
          <Text style={infosTextStyle}>-</Text>
        </View>
      </View>
      {isRunning ? (
        <View style={buttonsStyleRunning}>
          <Pause height={130} width={130} />
        </View>
      ) : (
        <View style={buttonsStyle}>
          <Play height={130} width={130} />
          <Stop height={130} width={130} />
        </View>
      )}
    </View>
  );
};

RunScreen.navigationOptions = {
  title: 'Run',
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#333333',
    height: '100%',
  },
  titleStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
    display: 'flex',
    textAlign: 'center',
    paddingHorizontal: 0,
    paddingVertical: 15,
  },
  distanceStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 90,
    width: '100%',
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 90,
    paddingBottom: 50,
  },
  kmStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 60,
    paddingLeft: 0,
  },
  infosStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
  },
  infoContainer: {
    margin: 10,
  },
  infosImgStyle: {
    marginLeft: 10,
    marginBottom: 10,
  },
  infosTextStyle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonsStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonsStyleRunning: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default RunScreen;
