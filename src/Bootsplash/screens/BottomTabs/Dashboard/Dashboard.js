import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {utilsReducer} from '../../../redux/reducer/utils';
import {SET_LOADING} from '../../../redux/ActionTypes';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const {loading, refresher} = useSelector(state => state.utils);

  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>{loading ? 'loading' : 'not loading'}</Text>
      <Button
        title="dispatch loading"
        onPress={() =>
          dispatch(utilsReducer({type: SET_LOADING, value: !loading}))
        }
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
