import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemon} from '../../redux/actions/fetching';

export default function Dashboard() {
  const dispatch = useDispatch();
  const {data, status} = useSelector(state => state.fetching);
  useEffect(() => {
    dispatch(getPokemon('berry'));
  }, [dispatch]);
  return (
    <View>
      <Text>Dashboard</Text>
      {status == 'loading' && <ActivityIndicator />}
      {data.results?.map((value, index) => (
        <Text key={index} style={{color: 'black'}}>
          {value.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
