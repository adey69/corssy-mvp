import { Button, Card, Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RemoteImage } from 'src/components';
import { theme } from 'src/theme';
import styles from './styles';
import { useLessonDetails } from './Hooks';
import { FlatList, ListRenderItemInfo, ScrollView, View } from 'react-native';
import { APP_TEXT } from 'src/strings';

const LessonDetails = () => {
  const {
    currentWidgetIndex,
    listRef,
    widgetsList,
    onNextPressed,
    onPreviousPressed,
  } = useLessonDetails();

  const renderImageAndTextContent = (item: ITextAndImageWidgetContent) => {
    return (
      <View>
        {item?.image ? (
          <RemoteImage style={styles.contentImg} resizeMode="contain" />
        ) : null}
        <Text variant="titleMedium">{item?.contentTitle}</Text>
        <Surface style={styles.contentCard}>
          <Text>{item?.description}</Text>
        </Surface>
      </View>
    );
  };

  const renderItem = ({ item }: ListRenderItemInfo<IWidget>) => {
    if (item?.widgetType === 'textAndImages') {
      return (
        <View style={styles.widgetItem}>
          {renderImageAndTextContent(item?.content)}
        </View>
      );
    } else if (item?.widgetType === 'video') {
      return null;
    }
    return (
      <View style={styles.widgetItem}>
        <Text>MCQ</Text>
      </View>
    );
  };

  const renderListFooter = () => {
    return (
      <View style={styles.footerContainer}>
        {currentWidgetIndex !== 0 && (
          <Button
            mode="elevated"
            onPress={onPreviousPressed}
            style={[styles.footerButton, styles.previousButton]}
          >
            <Text variant="bodyLarge">{APP_TEXT.previous}</Text>
          </Button>
        )}
        <Button
          mode="contained"
          onPress={onNextPressed}
          style={styles.footerButton}
        >
          <Text style={styles.nextButton} variant="bodyLarge">
            {widgetsList && currentWidgetIndex === widgetsList?.length - 1
              ? APP_TEXT.complete
              : APP_TEXT.next}
          </Text>
        </Button>
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={theme.safeAreaEdges}
      style={theme.commonStyles.screenContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          ref={listRef}
          data={widgetsList ?? []}
          renderItem={renderItem}
          horizontal
          scrollEnabled={false}
        />
      </ScrollView>
      {renderListFooter()}
    </SafeAreaView>
  );
};

export default LessonDetails;
