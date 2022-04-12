import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
const {width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import Gap from '../screens/Gap';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

export default function Demo() {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear.inOut,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  const translateXCirlce = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 150],
  });

  const translateXRow = width =>
    animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, width],
    });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#a0a0a0',
            borderColor: '#b0b0b0',
            height: 150,
            width: width,
          }}>
          <AnimatedLG
            colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              ...StyleSheet.absoluteFill,
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styles.circular}>
          <AnimatedLG
            colors={['#ffff', '#ededed', '#ededed', '#ffff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              ...StyleSheet.absoluteFill,
              transform: [{translateX: translateXCirlce}],
            }}
          />
        </View>
        <Gap height={20} />
        {[1, 2, 3, 4].map((value, index) => (
          <View key={index} style={{marginTop: 10}}>
            <View style={[styles.listRow, width]}>
              <AnimatedLG
                colors={['#f0f0f0', '#d6d6d6', '#d6d6d6', '#f0f0f0']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  ...StyleSheet.absoluteFill,
                  transform: [{translateX: translateXRow(width)}],
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                width: width,
              }}>
              <View
                style={[
                  styles.viewDistraction,
                  {width: 20, alignSelf: 'flex-start'},
                ]}
              />
              {[1, 2, 3, 4].map((value, index) => (
                <View
                  key={index}
                  style={styles.viewDistractionNew(index, width)}
                />
              ))}
              <View
                style={[
                  styles.viewDistraction,
                  {width: 20, alignSelf: 'flex-end'},
                ]}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewDistractionNew: (index, width) => ({
    position: 'absolute',
    height: 25,
    backgroundColor: 'white',
    width: index == 0 ? 35 : 20,
    marginLeft:
      index == 0 ? width / 2.3 : index == 1 ? width / 1.5 : width / 1.23,
  }),
  viewDistraction: {
    position: 'absolute',
    height: 25,
    backgroundColor: 'white',
  },
  listRow: {
    backgroundColor: '#f0f0f0',
    height: 25,
    overflow: 'hidden',
  },
  circular: {
    backgroundColor: '#ffff',
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    elevation: 3,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
