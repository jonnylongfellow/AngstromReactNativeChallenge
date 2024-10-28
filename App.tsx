import React, {useEffect} from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  const [leagues, setLeagues] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php',
      );
      const data = await response.json();
      setLeagues(data.leagues);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log('leagues', leagues);
  }, [leagues]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="A-Z"
        onPress={() => {
          setLeagues(prev => {
            const prevCopy = [...prev];
            prevCopy.sort((a, b) => a.strLeague.localeCompare(b.strLeague));
            return prevCopy;
          });
        }}
      />
      <Button
        title="Z-A"
        onPress={() => {
          setLeagues(prev => {
            const prevCopy = [...prev];
            prevCopy.sort((a, b) => b.strLeague.localeCompare(a.strLeague));
            return prevCopy;
          });
        }}
      />
      <FlatList
        data={leagues}
        renderItem={({item}) => <Text>{item.strLeague}</Text>}
        keyExtractor={item => item.idLeague}
      />
    </SafeAreaView>
  );
}

export default App;
