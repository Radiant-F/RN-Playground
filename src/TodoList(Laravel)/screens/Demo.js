import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {url} from '../components/utils/APIs';
import {launchImageLibrary} from 'react-native-image-picker';

const Demo = () => {
  const [type, setType] = useState('pemeriksaan fisik');
  const [image, setImage] = useState();
  const [token, setToken] = useState();
  const [form, setForm] = useState({email: null, password: null});

  async function loginAxios() {
    try {
      const {data} = await axios.post(url.login, form);
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }

  const loginFetch = () => {
    fetch(url.login, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setToken(json.token);
      })
      .catch(error => console.log(error));
  };

  // buka galeri untuk pilih gambar
  async function imagePicker() {
    const {assets} = await launchImageLibrary({quality: 0.5});
    console.log(assets[0]);
    setImage(assets[0]);
  }

  /**
   * fungsi untuk membuat form data baru agar
   * menyesuaikan dengan gambar yg dipilih
   */
  function createFormData(photo, body) {
    const data = new FormData();
    data.append('image', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
    return data;
  }

  // mulai post
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  async function addTodo() {
    try {
      const {data} = await axios.post(
        'http://apiqcorner.uatweb.live/applicant/inquiry/1201-12SKG02-2-201914129-001/upload-pemeriksaan',
        createFormData(image, type),
        config,
      );
      console.log('respon:', data);
    } catch (error) {
      console.log('error:', error);
    }
  }

  return (
    <View>
      {image?.uri && (
        <Image source={{uri: image.uri}} style={{width: 100, height: 100}} />
      )}
      <Button title="pilih gambar" onPress={imagePicker} />
      <Button title="Tambah todo" onPress={addTodo} />
    </View>
  );
};

export default Demo;
