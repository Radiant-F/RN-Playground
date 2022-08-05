import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../../../../redux/actions/todos';

export default function Todos({token}) {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos(token));
  }, [dispatch]);
  return (
    <View>
      {!todos && <ActivityIndicator size="large" />}
      {todos?.map(value => (
        <View key={value.id}>
          <Text>{value.task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
