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

const Tabs = ({ route }) => {
  const params = route.params;
  return (
    <Tab.Navigator
      accessibilityRole="tablist"
      initialRouteName={
        params?.initialRouteName ? params.initialRouteName : 'Home'
      }
      backBehavior="history"
      labeled={false}
      activeColor="#007eeb"
      inactiveColor="#adadad"
      barStyle={styles.barStyle}>
      <Tab.Screen
        accessible={true}
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={styles.iconStyle}
              accessibilityLabel="Tela de histórico"
              accessibilityHint="Aperte para navegar para a tela de histórico de atividades.">
              {color === '#007eeb' ? <HistoricoON /> : <Historico />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        accessible={true}
        accessibilityLabel="Tela inicial."
        accessibilityHint="Aperte para navegar para a tela inicial."
        accessibilityRole="tab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconStyle} accessibilityLabel="Tela inicial">
              {color === '#007eeb' ? <AtividadeON /> : <Atividade />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        accessible={true}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={styles.iconStyle}
              accessibilityLabel="Tela de perfil e cálculo do IMC."
              accessibilityHint="Aperte para navegar para a tela perfil e cálculo do IMC">
              {color === '#007eeb' ? <PerfilON /> : <Perfil />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
