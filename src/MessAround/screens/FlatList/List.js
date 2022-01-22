import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
// import {JSONPulsa} from '../../utils/JSON/@export';

const Item = ({idr}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{idr}</Text>
  </View>
);

function List() {
  const renderItem = ({item}) => <Item idr={item.idr} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={JSONPulsa.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: 100,
    margin: 10,
  },
  title: {
    fontSize: 15,
  },
});

export default List;
