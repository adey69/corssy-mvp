import { StyleProp, ViewStyle } from 'react-native';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { MD3Theme } from 'react-native-paper/lib/typescript/types';
import { Edges } from 'react-native-safe-area-context';

interface ITheme extends MD3Theme {
  safeAreaEdges: Edges;
  commonStyles: {
    screenContainer: StyleProp<ViewStyle>;
  };
}
// To add custom theming properties
export const theme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  commonStyles: {
    screenContainer: {
      flex: 1,
      backgroundColor: DefaultTheme.colors.background,
      padding: 16,
    },
  },
  safeAreaEdges: ['left', 'right', 'bottom'],
};
