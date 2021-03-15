import React from 'react';
import { View, StyleSheet } from 'react-native';
import IMCForm from '../components/IMCForm';
import UserInfo from '../components/UserInfo';

const ProfileScreen = () => {
  const { ScreenStyle } = styles;
  return (
    <View style={ScreenStyle} accessible={true} accessibilityLabel="Perfil">
      <UserInfo userData={{ name: 'Franklyn Seabra', age: 21 }} />
      <IMCForm />
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenStyle: {
    backgroundColor: '#FFF',
    height: '100%',
  },
});

export default ProfileScreen;
