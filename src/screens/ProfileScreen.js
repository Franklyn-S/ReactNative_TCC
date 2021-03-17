import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import IMCForm from '../components/IMCForm';
import UserInfo from '../components/UserInfo';

const ProfileScreen = () => {
  const { ScreenStyle } = styles;
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={ScreenStyle}>
      <UserInfo userData={{ name: 'Franklyn Seabra', age: 21 }} />
      <IMCForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScreenStyle: {
    backgroundColor: '#FFF',
    height: '100%',
  },
});

export default ProfileScreen;
