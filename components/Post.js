import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Avatar from './Avatar.png';

const Post = ({ title, subtitle, content, time }) => {
  return (
    <View style={styles.container}>
      <Image source={Avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
  },
  content: {
    color: '#000',
    marginTop: 5,
  },
  time: {
    color: '#999',
  },
});

export default Post;
