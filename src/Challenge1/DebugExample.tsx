import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import useCount from '../hooks/useCount';
import PostsList from './components/PostsList';

const DebugExample = () => {
  const [count] = useCount(0, true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <PostsList />
      <Button title="Log Count" onPress={() => console.log(count)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {fontSize: 24, marginBottom: 16},
  item: {fontSize: 18, marginBottom: 8, color: '#000'},
});
export default DebugExample;
