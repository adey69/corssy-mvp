import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { MD3Theme } from 'react-native-paper/lib/typescript/types';
import { Edges } from 'react-native-safe-area-context';

interface ITheme extends MD3Theme {
  safeAreaEdges: Edges;
}
// To add custom theming properties
export const theme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  safeAreaEdges: ['left', 'right', 'bottom'],
};
