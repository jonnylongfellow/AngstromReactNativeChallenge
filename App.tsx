import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, Pressable, View } from 'react-native';
import LeagueBlock from './components/LeagueBlock';


function App(): React.JSX.Element {

  const [teams, setTeams] = useState([]);

  const sortTeamsAZ = () => {
    setTeams(teams.sort((a, b)) => a.leagueName - b.leagueName)
}

useEffect(() => {
  async function getTeams() {
    try {
      const response = await fetch(process.env.API_URL);
      const json = await response.json();
      setTeams(json);
    }
    catch (error) {
      console.log(error);
    }
  }
  getTeams();
}, []);

return (
  <SafeAreaView style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text>Angstrom Coding Challenge...</Text>
    <View>
      <Pressable onPress={() => sortTeamsAZ()}>
        Sort A-Z
      </Pressable>
      <Pressable onPress={() => sortTeamsZA()}>
        Sort Z-A
      </Pressable>

    </View>
    <FlatList data={teams} renderItem={LeagueBlock} />
  </SafeAreaView>
);
}

export default App;
