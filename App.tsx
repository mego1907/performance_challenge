import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DebugExample from './src/Challenge1/DebugExample';
import LargeDataApp from './src/Challenge2/LargeDataApp';

function App(): React.JSX.Element {
  console.log('App');
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <DebugExample /> */}
      <LargeDataApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
