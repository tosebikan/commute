import React from 'react';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';

// constants
import { images, theme } from '../../constants';
const { onboarding1, onboarding2, onboarding3 } = images;

// theme
const { COLORS, SIZES } = theme;

// Dummy Data
const onBoarding = [
  {
    title: 'Commute with ease',
    description:
      'best way to find people moving to similar destinations as you',
    img: 'onboarding1'
  },
  {
    title: 'Commute safe',
    description:
      'Same trip multiple times with poeple living in your neighbourhood',
    img: 'onboardings'
  },
  {
    title: 'Commute cheaply',
    description:
      'Monthly payment to handle trips to recurring destinations everyday',
    img: 'onboarding3'
  }
];

function renderContent() {
  <Animated.ScollView>{}</Animated.ScollView>;
}

function OnBoarding() {
  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
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
