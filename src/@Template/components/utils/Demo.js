import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  PermissionsAndroid,
  Platform,
  FlatList,
} from 'react-native';
import {Header, Button, Gap} from '../../components';
import {colors} from '../../utils';
import {IconContact, BGtri} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';

const cekContact = () => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
  }).then(
    Contacts.getAll()
      .then(contacts => {
        // work with contacts
        console.log(contacts);
      })
      .catch(e => {
        console.log(e);
      }),
  );
};

const ChoosePulsa = ({navigation}) => {
  const getDataJSON = require('../../assets/json');
  const dataProduct = getDataJSON.JSONListPulsa.data;

  const renderItem = ({dataProduct}) => <Item title={dataProduct.idr} />;
  return (
    <View style={styles.container}>
      <Header title="Pulsa" onPress={() => navigation.goBack()} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>+62 |</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Masukan Nomer Handphone"
          style={styles.textinput}></TextInput>
        <TouchableOpacity onPress={cekContact}>
          <Image
            source={IconContact}
            style={{width: 24, height: 24, marginTop: 10, marginLeft: 30}}
          />
        </TouchableOpacity>
      </View>
      <Gap height={5} />
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('ChoosePulsa')}
        />
      </View>
      <Gap height={10} />
      <View style={styles.wrapperbg}>
        <Image source={BGtri} style={{width: 91, height: 91}} />
      </View>
      <View>
        <Text style={styles.choosetext}>Pilih Nominal Pengisian</Text>
      </View>
      <View style={styles.wrappperkotak}>
        <FlatList
          data={dataProduct}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ChoosePulsa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white1,
  },
  textinput: {
    paddingHorizontal: 30,
    fontSize: 20,
    alignItems: 'center',
    color: '#B5B5B5',
  },
  text: {
    fontSize: 20,
    color: '#858585',
    paddingTop: 10,
  },
  wrapper: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    paddingTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderColor: '#ACACAC',
  },
  button: {
    width: '100%',
    paddingHorizontal: 25,
  },
  imagesbg: {
    width: 30,
    height: 30,
  },
  wrapperbg: {
    alignItems: 'center',
  },
  choosetext: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: colors.text.secondary,
  },
  wrappperkotak: {},
});
