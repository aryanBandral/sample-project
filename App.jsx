import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import InboxScreen from './components/InboxScreen';
import OutboxScreen from './components/OutboxScreen';
import DraftScreen from './components/DraftScreen';
import DeleteScreen from './components/DeleteScreen';
import ArchiveScreen from './components/ArchiveScreen';
import CustomDrawerContent from './components/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3DA6D7',
        },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen name="Inbox" component={InboxScreen} />
      <Drawer.Screen name="Outbox" component={OutboxScreen} />
      <Drawer.Screen name="Draft" component={DraftScreen} />
      <Drawer.Screen name="Delete" component={DeleteScreen} />
      <Drawer.Screen name="Archive" component={ArchiveScreen} />
    </Drawer.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
