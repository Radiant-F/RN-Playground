import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTodo} from '../../redux/actions/todo';
import {getPosts} from '../../redux/actions/posts';

export default function Dashboard() {
  const dispatch = useDispatch();
  const {data, status} = useSelector(state => state.posts.posts);

  useEffect(() => {
    console.log(data);
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <View>
      <Text>Dashboard</Text>
      {status == 'loading' && <ActivityIndicator />}
      {data?.length == 0 && <Text>Kosong</Text>}
      {data &&
        data.length > 0 &&
        data.map((value, index) => (
          <Text key={index} style={{color: 'black'}}>
            {value.title}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({});
