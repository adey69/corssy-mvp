import { createStackNavigator } from '@react-navigation/stack';
import { Home, LessonDetails } from 'src/screens';

const Stack = createStackNavigator<RootStackParamsList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LessonDetails" component={LessonDetails} />
    </Stack.Navigator>
  );
};

export default RootStack;
