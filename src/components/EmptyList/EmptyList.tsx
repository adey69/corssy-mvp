import { memo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { useTranslation } from 'react-i18next';

interface IEmptyListProps {
  message?: string;
}

const EmptyList = (props: IEmptyListProps) => {
  const { message } = props;
  const { t } = useTranslation('common');
  return (
    <View style={styles.container}>
      <Text variant="labelLarge">{message ?? t('no_items_to_show')}</Text>
    </View>
  );
};

export default memo(EmptyList);
