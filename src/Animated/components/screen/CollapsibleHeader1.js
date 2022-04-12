import React, {useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CollapsibleHeader1() {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setopen(!open);
  };
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
      <View style={styles.row}>
        <Text>Read More</Text>
        <View style={{width: 100}} />
        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={23} />
      </View>
      {open && (
        <Text style={styles.subItem}>
          data yang panjang sekali sampe containernta ga muat
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingTop: 5,
  },
  item: {
    backgroundColor: 'aqua',
    maxWidth: 250,
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
