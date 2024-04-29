import { SafeAreaView } from 'react-native';
import styles from './styles';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const NoNetwork = () => {
  const { t } = useTranslation('common');
  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('no_internet')}</Text>
    </SafeAreaView>
  );
};

export default NoNetwork;
