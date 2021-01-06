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
      'Same trip multiple times with people living in your neighbourhood',
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
  const scrollX = new Animated.Value(0);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                top: '5%',
                left: 40,
                right: 40
              }}
            >
              <Text
                style={{
                  color: COLORS.gray,
                  fontSize: 30,
                  textAlign: 'center'
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.gray,
                  textAlign: 'center',
                  marginTop: SIZES.base
                }}
              >
                {item.description}
              </Text>
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

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 14, SIZES.base],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dots, { width: dotSize, height: dotSize }]}
            ></Animated.View>
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom: -40
  },
  onboarding_image: {
    width: '100%',
    height: '100%'
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '8%' : '6%'
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dots: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
    marginHorizontal: SIZES.radius / 2
  }
});
