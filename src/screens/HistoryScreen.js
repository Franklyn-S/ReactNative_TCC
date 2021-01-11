import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RunSection from '../components/RunSection';

const HistoryScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.ScrollViewStyle}>
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="31 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="30 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: '#FFF',
  },
});

export default HistoryScreen;
