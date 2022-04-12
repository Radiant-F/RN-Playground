import React, {useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
} from 'react-native';

export default function BouncyButton() {
  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.99],
  });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }, 100);
  };
  return (
    <TouchableNativeFeedback
      useForeground
      activeOpacity={1}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={[styles.button, {transform: [{scale}]}]}>
        <Text style={styles.text}>A Bit Bouncy Innit?</Text>
      </Animated.View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
  button: {
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    elevation: 3,
    overflow: 'hidden',
    paddingHorizontal: 50,
    height: 45,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  count: {
    fontSize: 30,
  },
});
