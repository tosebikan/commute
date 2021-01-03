import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  View,
  Image,
  Text
} from 'react-native';

// constants
import { images, theme } from '../../constants';
const { onboarding1, onboarding2, onboarding3 } = images;

// theme
const { COLORS, SIZES } = theme;

// Dummy Data
const onBoardings = [
  {
    title: 'Commute with ease',
    description:
      'best way to find people moving to similar destinations as you',
    img: onboarding1
  },
  {
    title: 'Commute safe',
    description:
      'Same trip multiple times with poeple living in your neighbourhood',
    img: onboarding2
  },
  {
    title: 'Commute cheaply',
    description:
      'Monthly payment to handle trips to recurring destinations everyday',
    img: onboarding3
  }
];

const OnBoarding = () => {
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {onBoardings.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            <View style={{ position: 'absolute', zIndex: 1, top: '5%' }}>
              <Text style={{ color: COLORS.gray }}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={styles.onboarding_image}
              />
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  onboarding_image: {
    width: '100%',
    height: '100%'
  }
});
