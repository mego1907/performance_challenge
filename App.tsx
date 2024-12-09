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

export default App;
