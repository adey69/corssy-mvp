import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { IMAGES } from 'src/assets';
import { Home, LessonDetails, NoNetwork } from 'src/screens';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator<RootStackParamsList>();
const NoNetworkStack = createStackNavigator();

const RootStack = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => unsubscribe();
  }, []);

  return isConnected ? (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="LessonDetails"
        component={LessonDetails}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.backContainer}
            >
              <Image source={IMAGES.back} style={styles.backIcon} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  ) : (
    <NoNetworkStack.Navigator screenOptions={{ headerShown: false }}>
      <NoNetworkStack.Screen name="NoNetwork" component={NoNetwork} />
    </NoNetworkStack.Navigator>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    marginLeft: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});

export default RootStack;
