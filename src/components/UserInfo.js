import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PerfilON from '../assets/PerfilON.svg';

const UserInfo = ({ userData }) => {
  const { name, age, profilePic } = userData;
  const {
    userInfoContainerStyle,
    textContainerStyle,
    nameStyle,
    ageStyle,
  } = styles;
  return (
    <View style={userInfoContainerStyle}>
      {profilePic ? (
        profilePic
      ) : (
        <PerfilON
          height={70}
          width={70}
          accessible={true}
          accessibilityLabel="Foto de perfil padrão."
        />
      )}
      <View style={textContainerStyle} accessible={true}>
        <Text style={nameStyle}>{name}</Text>
        <Text style={ageStyle}>{age} anos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainerStyle: {
    flexDirection: 'row',
    margin: 30,
  },
  textContainerStyle: {
    flexDirection: 'column',
    margin: 10,
  },
  nameStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#707070',
  },
  ageStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#707070',
  },
});

export default UserInfo;
