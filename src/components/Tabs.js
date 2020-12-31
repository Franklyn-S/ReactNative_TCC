import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, View } from 'react-native';
import Atividade from '../assets/Atividade.svg';
import AtividadeON from '../assets/AtividadeON.svg';
import Perfil from '../assets/Perfil.svg';
import PerfilON from '../assets/PerfilON.svg';
import Historico from '../assets/Historico.svg';
import HistoricoON from '../assets/HistoricoON.svg';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    backBehavior="history"
    labeled={false}
    activeColor="#007eeb"
    inactiveColor="#adadad"
    barStyle={styles.barStyle}>
    <Tab.Screen
      name="History"
      component={HistoryScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <View style={styles.iconStyle}>
            {color === '#007eeb' ? <HistoricoON /> : <Historico />}
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <View style={styles.iconStyle}>
            {color === '#007eeb' ? <AtividadeON /> : <Atividade />}
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <View style={styles.iconStyle}>
            {color === '#007eeb' ? <PerfilON /> : <Perfil />}
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#FFFFFF',
    shadowOpacity: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Tabs;
