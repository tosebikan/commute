import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

function OnBoarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>OnBoarding Screen</Text>
    </SafeAreaView>
  );
}
export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  }
});
