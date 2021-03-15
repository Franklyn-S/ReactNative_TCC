import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RunSection from '../components/RunSection';

const HistoryScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.ScrollViewStyle}>
      <RunSection
        date="08 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="07 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="06 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="05 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="04 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="03 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="02 de Dezembro"
        duration="58:00"
        navigation={navigation}
      />
      <RunSection
        date="01 de Dezembro"
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
