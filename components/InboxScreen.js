import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Post from './Post';

const posts = [
  {
    id: '1',
    title: 'React',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '1h',
  },
  {
    id: '2',
    title: 'Angular',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '1h',
  },
  {
    id: '3',
    title: 'Ember',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '2h',
  },
  {
    id: '4',
    title: 'Vue',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '3h',
  },
  {
    id: '5',
    title: 'Vue',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '3h',
  },
  {
    id: '6',
    title: 'Vue',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '3h',
  },
  {
    id: '7',
    title: 'Vue',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '3h',
  },
  {
    id: '8',
    title: 'Vue',
    subtitle: 'The JavaScript Framework',
    content:'Example Post',
    time: '3h',
  },
];

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post 
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default InboxScreen;
