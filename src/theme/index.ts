import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { MD3Colors, MD3Theme } from 'react-native-paper/lib/typescript/types';
import { Edges } from 'react-native-safe-area-context';

interface ITheme extends MD3Theme {
  safeAreaEdges: Edges;
  colors: MD3Colors & {
    primaryDull: string;
  };
  commonStyles: {
    screenContainer: StyleProp<ViewStyle>;
  };
  screenWidth: number;
  screenHeight: number;
}
// To add custom theming properties
export const theme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryDull: '#8a2be2',
  },
  commonStyles: {
    screenContainer: {
      flex: 1,
      backgroundColor: DefaultTheme.colors.background,
    },
  },

  safeAreaEdges: ['left', 'right', 'bottom'],
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
};
