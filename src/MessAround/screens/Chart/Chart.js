import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {
  cutlery,
  heart,
  nabawi_mosque,
  praying,
  reading_quran,
  size,
} from '../../components/assets/images/@exports';
import {Gap} from '../../components/screens/@exports';

function Chart() {
  const data = [
    {
      title: 'Sholat',
      done: 90,
      total: 220,
    },
    {
      title: `Al-Qur'an`,
      done: 90,
      total: 220,
    },
    {
      title: `Do'a`,
      done: 90,
      total: 220,
    },
    {
      title: 'Puasa',
      done: 90,
      total: 220,
    },
    {
      title: 'Donasi',
      done: 90,
      total: 220,
    },
  ];
  function amalanIcon(title) {
    switch (title) {
      case 'Sholat':
        return nabawi_mosque;
      case `Al-Qur'an`:
        return reading_quran;
      case `Do'a`:
        return praying;
      case 'Puasa':
        return cutlery;
      case 'Donasi':
        return heart;
      default:
        return nabawi_mosque;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {data.map((value, index) => (
          <View key={index}>
            <Text style={styles.amalan}>{value.title}</Text>
            <Gap height={5} />
            <View style={styles.content}>
              <View style={styles.chart}>
                <ProgressChart
                  data={[0.75]}
                  width={75}
                  height={75}
                  hideLegend
                  radius={30}
                  strokeWidth={5}
                  chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  }}
                  style={{position: 'absolute'}}
                />
                <Image
                  source={amalanIcon(value.title)}
                  style={size.image}
                  resizeMethod="resize"
                />
              </View>
              <Text style={styles.textCounter}>
                {value.done} dari {value.total} dikerjakan
              </Text>
            </View>
            <Gap height={15} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  wrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'aqua',
  },
  content: {
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    height: 90,
    borderRadius: 10,
  },
  chart: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  amalan: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    includeFontPadding: false,
  },
  textCounter: {
    width: 95,
    marginLeft: -10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
});

export default Chart;
