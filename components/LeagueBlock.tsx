import React from 'react';
import { View, Text } from 'react-native';

type League = {
  strLeague: string
}

function LeagueBlock({ league }: { league: League }): React.JSX.Element {
  return (
    <View>
      <Text>{league.strLeague}</Text>
    </View>
  );
}

export default LeagueBlock;
