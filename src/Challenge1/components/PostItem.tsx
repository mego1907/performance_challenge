import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {PostType} from './PostsList';

const PostItem = ({item}: {item: PostType}) => {
  console.log('Single Post');
  return <Text style={styles.item}>{item.title}</Text>;
};

export default memo(PostItem);

const styles = StyleSheet.create({
  item: {fontSize: 18, marginBottom: 8, color: '#000'},
});
