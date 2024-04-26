import {memo} from 'react';
import {
  View,
  ActivityIndicator as Indicator,
  ActivityIndicatorProps,
} from 'react-native';
import styles from './styles';

const ActivityIndicator = (props: ActivityIndicatorProps) => {
  return (
    <View style={styles.container}>
      <Indicator {...props} size={'large'} />
    </View>
  );
};

export default memo(ActivityIndicator);
