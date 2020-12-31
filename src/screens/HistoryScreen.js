import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RunSection from '../components/RunSection';

const HistoryScreen = () => {
  return (
    <ScrollView style={styles.ScrollViewStyle}>
      <RunSection date="30 de Dezembro" duration="58" />
      <RunSection date="30 de Dezembro" duration="58" />
      <RunSection date="30 de Dezembro" duration="58" />
      <RunSection date="30 de Dezembro" duration="58" />
      <RunSection date="30 de Dezembro" duration="58" />
      <RunSection date="30 de Dezembro" duration="58" />
      <RunSection date="31 de Dezembro" duration="58" />
      <RunSection date="30 de Dezembro" duration="58" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: '#FFF',
  },
});

export default HistoryScreen;
