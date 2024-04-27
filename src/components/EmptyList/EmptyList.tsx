import { memo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { APP_TEXT } from 'src/strings';
import styles from './styles';

interface IEmptyListProps {
  message?: string;
}

const EmptyList = (props: IEmptyListProps) => {
  const { message } = props;
  return (
    <View style={styles.container}>
      <Text variant="labelLarge">{message ?? APP_TEXT.no_items_to_show}</Text>
    </View>
  );
};

export default memo(EmptyList);
