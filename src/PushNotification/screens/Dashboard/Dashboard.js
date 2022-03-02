import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PushNotification, {Importance} from 'react-native-push-notification';

export default function Dashboard({navigation, route}) {
  useEffect(() => {
    // PushNotification.createChannel(
    //   {
    //     channelId: 'channel-id-0', // (required)
    //     channelName: 'My channel', // (required)
    //     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    //     playSound: false, // (optional) default: true
    //     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    //     importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    //     vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    //   },
    //   created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    // );
  }, []);

  function LocalNotification() {
    PushNotification.localNotification({
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
      channelId: 'channel-id-0',
      actions: ['Yes', 'No'],
    });
  }

  const data = {
    data_cars: [
      {
        id: 1,
        name: 'Pick Up Daihatsu',
        number_plate: 'B 00000 nm',
        is_ready: '0',
      },
      {
        id: 3,
        name: 'Kijang Innova Reborn',
        number_plate: 'KB 0000',
        is_ready: '2',
      },
      {
        id: 9,
        name: 'Pick Up Putih',
        number_plate: 'KB 1244',
        is_ready: '3',
      },
    ],
    data_borrower: [
      {
        id: 190,
        user_id: '55',
        car_id: '3',
        date_of_request: '27 February 2022',
        date_of_use: '27 February 2022',
        pick_time: '27 February 2022, 16:00',
        back_time: '28 February 2022, 08:05',
        duration: '16',
        necessity: 'Pribadi',
        reason: 'Lamaran Salman ke rumah',
        general_condition: 'Bagus',
        after_condition: 'Bagus',
        status: '1',
        car_is_ready: '2',
        is_return: '0',
        created_at: '2022-02-22T14:26:56.000000Z',
        user: {
          id: 55,
          name: 'Acid',
        },
      },
    ],
  };

  const [carsData, setCarsData] = useState();

  useEffect(() => {
    const mapped = data.data_cars.map(car => {
      const borrower = data.data_borrower.find(
        item => new Number(item.car_id) == car.id,
      );
      return {
        ...car,
        ...(borrower == null
          ? {name_borrower: null, data_borrower: null}
          : {name_borrower: borrower.user.name, data_borrower: borrower}),
      };
    });
    setCarsData(mapped);
  }, []);

  const mapped = [
    {
      data_borrower: null,
      id: 1,
      is_ready: '0',
      name: 'Pick Up Daihatsu',
      name_borrower: null,
      number_plate: 'B 00000 nm',
    },
    {
      data_borrower: {
        after_condition: 'Bagus',
        back_time: '28 February 2022, 08:05',
        car_id: '3',
        car_is_ready: '2',
        created_at: '2022-02-22T14:26:56.000000Z',
        date_of_request: '27 February 2022',
        date_of_use: '27 February 2022',
        duration: '16',
        general_condition: 'Bagus',
        id: 190,
        is_return: '0',
        necessity: 'Pribadi',
        pick_time: '27 February 2022, 16:00',
        reason: 'Lamaran Salman ke rumah',
        status: '1',
        user: [Object],
        user_id: '55',
      },
      id: 3,
      is_ready: '2',
      name: 'Kijang Innova Reborn',
      name_borrower: 'Acid',
      number_plate: 'KB 0000',
    },
    {
      data_borrower: null,
      id: 9,
      is_ready: '3',
      name: 'Pick Up Putih',
      name_borrower: null,
      number_plate: 'KB 1244',
    },
  ];
  return (
    <View>
      <Button title="local notification" onPress={LocalNotification} />
      <Text>Dashboard</Text>
      {carsData?.map(value => (
        <View key={value.id}>
          <Text>{value.name}</Text>
          <Text>{value.data_borrower?.user.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
