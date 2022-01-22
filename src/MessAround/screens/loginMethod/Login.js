import React, {useState} from 'react';
import {View, Text} from 'react-native';

function Login() {
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
  return (
    <View>
      <Text>a</Text>
    </View>
  );
}

export default Login;
