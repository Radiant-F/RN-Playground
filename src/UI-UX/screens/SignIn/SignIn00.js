import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Gap,
  PoppinsBold,
  PoppinsMedium,
  PoppinsRegular,
} from '../../components';
import {FormInput} from '../../components/screens/signin00';

export default function SignIn00() {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#64007a', '#ff1ff0']}
        style={styles.viewGradientBG}
        angle={95}
        useAngle
      />
      <View style={styles.container}>
        <View style={styles.viewContainerOverlay} />
        <View style={styles.viewContainer}>
          <View style={styles.containerBackground} />
          <View style={styles.viewSignIn}>
            <Icon name="panda" color={'black'} size={70} selectable={false} />
            <Text style={styles.textSignIn}>Sign In</Text>
            <FormInput />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textSignIn: {
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
    fontFamily: PoppinsBold,
  },
  viewSignIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 40,
  },
  containerBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  viewContainer: {
    width: '100%',
    maxWidth: 480,
    borderRadius: 10,
    overflow: 'hidden',
    height: 450,
  },
  viewContainerOverlay: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: 'white',
    borderRadius: 10,
    opacity: 0.2,
    transform: [{rotate: '-5deg'}],
    position: 'absolute',
    height: 450,
  },
  container: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 40,
  },
  viewGradientBG: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
