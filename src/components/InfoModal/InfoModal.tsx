import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Modal, ModalProps, Portal, Text } from 'react-native-paper';
import styles from './styles';
import { useTranslation } from 'react-i18next';

interface IInfoModalProps extends Omit<ModalProps, 'children'> {
  message: string;
}

const InfoModal = (props: IInfoModalProps) => {
  const { message, ...rest } = props;
  const { t } = useTranslation('common');
  return (
    <Portal>
      <Modal contentContainerStyle={styles.container} {...rest}>
        <Text variant="titleMedium">{message}</Text>
        <TouchableOpacity style={styles.closeBtn} onPress={rest.onDismiss}>
          <Text>{t('close')}</Text>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

export default memo(InfoModal);
