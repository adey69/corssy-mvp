import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Modal, ModalProps, Portal, Text } from 'react-native-paper';
import { APP_TEXT } from 'src/strings';
import styles from './styles';

interface IInfoModalProps extends Omit<ModalProps, 'children'> {
  message: string;
}

const InfoModal = (props: IInfoModalProps) => {
  const { message, ...rest } = props;
  return (
    <Portal>
      <Modal contentContainerStyle={styles.container} {...rest}>
        <Text variant="titleMedium">{message}</Text>
        <TouchableOpacity style={styles.closeBtn} onPress={rest.onDismiss}>
          <Text>{APP_TEXT.close}</Text>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

export default memo(InfoModal);
