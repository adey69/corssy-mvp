import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IMAGES } from 'src/assets';
import { Home, LessonDetails } from 'src/screens';

const Stack = createStackNavigator<RootStackParamsList>();

const RootStack = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
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
