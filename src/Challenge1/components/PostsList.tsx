import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostItem from './PostItem';

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsList = () => {
  const [data, setData] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (res.status === 200) {
        const responseBody = await res.json();
        setData(responseBody);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  // Fetch Posts
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log('Posts');

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <PostItem item={item} />}
    />
  );
};

export default memo(PostsList);
