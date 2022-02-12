import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/screen/Header';

export default function StickyHeader() {
  const [mode, setMode] = useState('flatlist');
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };
  const header = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'aqua',
          elevation: 3,
        }}>
        <Text>Header</Text>
      </View>
    );
  };
  return (
    <View>
      <Button
        title={`mode: ${mode}`}
        onPress={() => setMode(mode == 'flatlist' ? 'scrollview' : 'flatlist')}
      />
      {mode == 'flatlist' && (
        <FlatList
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
        />
      )}
      {mode == 'scrollview' && (
        <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
          <Header />
          {data?.map((value, index) => (
            <View key={index}>
              <Text>{value}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

const data = [
  'James',
  'Robert',
  'John',
  'Michael',
  'William',
  'David',
  'Richard',
  'Thomas',
  'Charles',
  'Daniel',
  'Matthew',
  'Mark',
  'Donald',
  'Steven',
  'Paul',
  'Kenneth',
  'Kevin',
  'Brian',
  'George',
  'Edward',
  'Ronald',
  'Timothy',
  'Ryan',
  'Gary',
  'Nicholas',
  'Eric',
  'Stephen',
  'Larry',
  'Scott',
  'Brandon',
  'Samuel',
  'Gregory',
  'Frank',
  'Raymond',
  'Patrick',
  'Dennis',
  'Tyler',
  'Henry',
  'Nathan',
  'Douglas',
  'Zachary',
  'Peter',
  'Kyle',
  'Walter',
  'Ethan',
  'Harold',
  'Keith',
  'Roger',
  'Noah',
  'Gerald',
  'Terry',
  'Sean',
  'Lawrence',
  'Dylan',
  'Billy',
  'Willie',
  'Gabriel',
  'Logan',
  'Wayne',
  'Roy',
  'Ralph',
  'Randy',
  'Eugene',
  'Vincent',
  'Russell',
  'Elijah',
  'Louis',
  'Philip',
  'Mary',
  'Patricia',
  'Linda',
  'Elizabeth',
  'Susan',
  'Sarah',
  'Karen',
  'Nancy',
  'Lisa',
  'Margaret',
  'Sandra',
  'Ashley',
  'Kimberly',
  'Emily',
  'Donna',
  'Michelle',
  'Dorothy',
  'Carol',
  'Amanda',
  'Melissa',
  'Deborah',
  'Stephanie',
  'Rebecca',
  'Sharon',
  'Laura',
  'Kathleen',
  'Amy',
  'Shirley',
  'Angela',
  'Helen',
  'Anna',
  'Brenda',
  'Pamela',
  'Nicole',
  'Emma',
  'Samantha',
  'Katherine',
  'Debra',
  'Rachel',
  'Janet',
  'Ruth',
  'Maria',
  'Heather',
  'Diane',
  'Virginia',
  'Julie',
  'Joyce',
  'Victoria',
  'Olivia',
  'Kelly',
  'Christina',
  'Lauren',
  'Joan',
  'Evelyn',
  'Judith',
  'Megan',
  'Cheryl',
  'Hannah',
  'Martha',
  'Jacqueline',
  'Frances',
  'Gloria',
  'Teresa',
  'Kathryn',
  'Sara',
  'Janice',
  'Jean',
  'Madison',
  'Doris',
  'Julia',
  'Judy',
  'Grace',
  'Denise',
  'Marilyn',
  'Beverly',
  'Danielle',
  'Theresa',
  'Sophia',
  'Marie',
  'Diana',
  'Brittany',
  'Natalie',
  'Isabella',
  'Charlotte',
  'Rose',
  'Kayla',
];
