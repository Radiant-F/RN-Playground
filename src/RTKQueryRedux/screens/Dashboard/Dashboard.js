import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {utilsReducer} from '../../redux/reducer/utils';
import {SET_LOADING} from '../../redux/ActionTypes';
import {
  useAddPostMutation,
  useGetPostsQuery,
  useSignInMutation,
} from '../../redux/api/apiSlice';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const {loading, refresher} = useSelector(state => state.utils);
  const {data, isLoading, isSuccess, isError, error} = useGetPostsQuery();
  const [signIn] = useSignInMutation();
  const [addPost] = useAddPostMutation();

  const postForm = {
    title: 'RTK Query',
    message: 'learning how rtk query works',
    tags: 'redux react',
    selectedFile: 'base64',
    name: 'Radiant',
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGYzY2IxNGRiOTNmYzc4ZGViMmZhMCIsIm5hbWUiOiJSYWRpYW50IEJhcnUiLCJlbWFpbCI6InJhZGlhbnRAZ21haWwuY29tIiwiaWF0IjoxNjU5NzY5NTAyLCJleHAiOjE2NTk3NzMxMDJ9.aq3zEtK_G7YAr9l0xm42qpSn7h_1jB5Pk3btlFqz8yo';
  return (
    <View>
      <Text>{loading ? 'loading' : 'not loading'}</Text>
      <Button
        title="dispatch loading"
        onPress={() =>
          dispatch(utilsReducer({type: SET_LOADING, value: !loading}))
        }
      />
      <Button
        title="auth"
        onPress={() =>
          signIn({email: 'radiant@gmail.com', password: '12345678'})
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }
      />
      <Button
        title="add post"
        onPress={() =>
          addPost({body: postForm, token})
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }
      />
      {isSuccess &&
        data?.data?.map(post => (
          <View key={post._id}>
            <Text>
              from {post.name} {post.title}
            </Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({});
