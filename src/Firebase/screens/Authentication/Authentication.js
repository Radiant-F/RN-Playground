import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

export default function Authentication({navigation}) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [formData, setFormData] = useState({email: null, password: null});

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '289190284007-b9mnpsninsq4oa52tn5i1c4aqkrjg2kp.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function anonSignIn() {
    try {
      await auth().signInAnonymously();
      console.log('User signin as anonymous.');
      navigation.replace('MainApp');
    } catch (error) {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      console.error(error);
    }
  }

  function emailPasswordAuth(method) {
    auth()
      [method](formData.email, formData.password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.replace('MainApp');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          ToastAndroid.show(
            'That email address is already in use!',
            ToastAndroid.SHORT,
          );
          return;
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          ToastAndroid.show(
            'That email address is invalid!',
            ToastAndroid.SHORT,
          );
          return;
        }
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      });
  }

  async function googleSignIn() {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
      console.log('Signed in with Google.');
      navigation.replace('MainApp');
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      console.log(error);
    }
  }

  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out.'))
      .catch(error => console.log(error));
  }

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      navigation.replace('MainApp');
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      console.log(error);
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        {/* SIGN UP */}
        <Text>Sign Up</Text>
        <TextInput
          placeholder="email"
          underlineColorAndroid={'orange'}
          onChangeText={value => setFormData({...formData, email: value})}
        />
        <TextInput
          placeholder="password"
          underlineColorAndroid={'orange'}
          onChangeText={value => setFormData({...formData, password: value})}
        />
        <Button
          title="sign up"
          onPress={() => emailPasswordAuth('createUserWithEmailAndPassword')}
        />
        <View style={{height: 20}} />
        {/* SIGN IN */}
        <Text>Sign In</Text>
        <TextInput
          placeholder="email"
          underlineColorAndroid={'orange'}
          onChangeText={value => setFormData({...formData, email: value})}
        />
        <TextInput
          placeholder="password"
          underlineColorAndroid={'orange'}
          onChangeText={value => setFormData({...formData, password: value})}
        />
        <Button
          title="sign IN"
          onPress={() => emailPasswordAuth('signInWithEmailAndPassword')}
        />
        <View style={{height: 20}} />
        {/* ANON */}
        <Button title="sign in anonymously" onPress={anonSignIn} />
        <View style={{height: 20}} />
        {/* Google */}
        <Button title="Google Sign-In" onPress={googleSignIn} />
        <View style={{height: 20}} />
        {/* Phone Auth */}
        {confirm ? (
          <>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
          </>
        ) : (
          <Button
            title="Phone Number Sign In"
            onPress={() => signInWithPhoneNumber('+6285157439660')}
          />
        )}
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title="sign out" onPress={signOut} />
    </View>
  );
}
