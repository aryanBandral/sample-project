import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Avatar from './Avatar.png'; // Adjust the path if necessary

const CustomDrawerContent = (props) => {
  const handleLogout = () => {
    props.navigation.navigate('LogIn');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image source={Avatar} style={styles.avatar} />
          <Text style={styles.name}>JavaScript</Text>
          <Text style={styles.email}>JavaScript@language.com</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#3DA6D7',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: '#fff',
  },
  logoutContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#3DA6D7',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
