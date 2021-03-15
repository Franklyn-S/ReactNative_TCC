import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNLocation from 'react-native-location';

import Clock from '../assets/clock.svg';
import Fire from '../assets/fire.svg';
import Heart from '../assets/valentines-heart.svg';
import Pause from '../assets/pause.svg';
import Play from '../assets/play.svg';
import Stop from '../assets/stop.svg';

const STATES = {
  stopped: 'stopped',
  running: 'running',
  paused: 'paused',
};
const RunScreen = () => {
  const [currentState, setCurrentState] = useState(STATES.stopped);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [timer, setTimer] = useState(null);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [kmCounter, setKmCounter] = useState(null);
  const [km, setKm] = useState(0);
  const [kcalCounter, setKcalCounter] = useState(null);
  const [kcal, setKcal] = useState(0);

  useEffect(() => {
    const configureLocation = async () => {
      RNLocation.configure({
        distanceFilter: 100,
        desiredAccuracy: {
          ios: 'best',
          android: 'highAccuracy',
        },
        interval: 1000,
        maxWaitTime: 1000,
      });
      setIsPermissionGranted(await requestPermission());
    };
    configureLocation();
  }, [setIsPermissionGranted]);

  const requestPermission = async () => {
    const granted = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
        rationale: {
          title: 'Permissão de localização',
          message:
            'Esse aplicativo precisa de permissão para a sua localização ' +
            'para que possa registrar suas corridas.',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      },
    });
    return granted;
  };
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
  const resetCounters = () => {
    setHour(0);
    setMin(0);
    setSec(0);
    setKm(0);
    setKcal(0);
    setKmCounter(null);
    setKcalCounter(null);
    setTimer(null);
  };

  const startCronometro = () => {
    let newSec = sec;
    let newMin = min;
    const contador = setInterval(() => {
      newSec = newSec + 1;
      setSec(s => s + 1);
      if (newSec === 60) {
        newSec = 0;
        setSec(0);
        newMin = newMin + 1;
        setMin(m => m + 1);
        if (newMin === 60) {
          newMin = 0;
          setMin(0);
          setHour(h => h + 1);
        }
      }
    }, 1000);
    setTimer(contador);
  };

  const startKm = () => {
    setKmCounter(
      setInterval(() => {
        setKm(k => k + 0.1);
      }, 5000)
    );
  };

  const startKcal = () => {
    setKcalCounter(
      setInterval(() => {
        setKcal(kc => kc + 1);
      }, 2000)
    );
  };

  const startRunning = () => {
    if (isPermissionGranted) {
      setCurrentState(STATES.running);
      startCronometro();
      startKm();
      startKcal();
    }
  };
  const pauseRunning = () => {
    setCurrentState(STATES.paused);
    clearInterval(timer);
    clearInterval(kmCounter);
    clearInterval(kcalCounter);
  };
  const stopRunning = () => {
    setCurrentState(STATES.stopped);
    resetCounters();
  };
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Corrida</Text>
      <Text style={distanceStyle}>
        {km.toFixed(1)} <Text style={kmStyle}>km</Text>
      </Text>
      <View style={infosStyle}>
        <View style={infoContainer} accessible={true}>
          <Clock
            style={infosImgStyle}
            height={30}
            width={30}
            accessibilityLabel="Tempo de corrida:"
          />
          <Text style={infosTextStyle}>
            {hour ? `${('00' + hour).slice(-2)}:` : ''}
            {('00' + min).slice(-2)}:{('00' + sec).slice(-2)}
          </Text>
        </View>
        <View style={infoContainer} accessible={true}>
          <Fire
            style={infosImgStyle}
            height={30}
            width={30}
            accessibilityLabel="Calorias perdidas: "
          />
          <Text style={infosTextStyle}>{kcal} kcal</Text>
        </View>
        <View style={infoContainer} accessible={true}>
          <Heart
            style={infosImgStyle}
            height={30}
            width={30}
            accessibilityLabel="Calorias perdidas: "
          />
          <Text style={infosTextStyle}>-</Text>
        </View>
      </View>
      {currentState === STATES.running ? (
        <View style={buttonsStyleRunning}>
          <TouchableOpacity
            onPress={pauseRunning}
            accessible={true}
            accessibilityLabel="Batimento Cardíaco: ">
            <Pause height={130} width={130} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={buttonsStyle}>
          <TouchableOpacity
            onPress={startRunning}
            accessible={true}
            accessibilityLabel={`${
              STATES.paused ? 'Continuar' : 'Começar'
            } corrida.`}>
            <Play height={130} width={130} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={stopRunning}
            accessible={true}
            accessibilityLabel="Terminar corrida.">
            <Stop height={130} width={130} />
          </TouchableOpacity>
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
