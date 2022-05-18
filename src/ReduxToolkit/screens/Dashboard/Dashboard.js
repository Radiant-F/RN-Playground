import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTodo} from '../../redux/actions/todo';

export default function Dashboard() {
  const dispatch = useDispatch();
  const {todo, auth} = useSelector(state => state);

  // useEffect(() => {
  //   dispatch(getTodo(auth.user_data.token));
  // }, [dispatch]);

  return (
    <View>
      <Text>Dashboard</Text>
      {todo.todos_list?.map((value, index) => (
        <Text key={index} style={{color: 'black'}}>
          {value.task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
