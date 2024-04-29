import {
  ActivityIndicator,
  Button,
  ProgressBar,
  Surface,
  Text,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InfoModal, RemoteImage, VideoPlayer } from 'src/components';
import { theme } from 'src/theme';
import styles from './styles';
import { useLessonDetails } from './Hooks';
import { FlatList, ListRenderItemInfo, ScrollView, View } from 'react-native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const LessonDetails = () => {
  const {
    initialListIndex,
    currentWidgetIndex,
    completedLessonsWidgets,
    listRef,
    widgetsList,
    showErrorModal,
    isLoading,
    isFetching,
    setShowErrorModal,
    onNextPressed,
    onPreviousPressed,
  } = useLessonDetails();
  const { t } = useTranslation('common');

  const renderImageAndTextContent = useCallback(
    (item: ITextAndImageWidgetContent) => {
      return (
        <View>
          {item?.image ? (
            <RemoteImage
              source={{ uri: item?.image }}
              style={styles.contentImg}
              resizeMode="contain"
            />
          ) : null}
          <Surface style={styles.contentTitleContainer}>
            <Text variant="titleLarge">{item?.contentTitle}</Text>
          </Surface>

          <Surface style={styles.contentDescContainer}>
            <Text>{item?.description}</Text>
          </Surface>
        </View>
      );
    },
    [],
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IWidget>) => {
    if (item?.widgetType === 'textAndImages') {
      return (
        <View style={styles.widgetItem}>
          {renderImageAndTextContent(item?.content)}
        </View>
      );
    } else if (item?.widgetType === 'video') {
      return (
        <View style={styles.widgetItem}>
          <VideoPlayer
            source={{
              uri:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' ??
                '',
            }}
          />
        </View>
      );
    }
    return (
      <View style={styles.widgetItem}>
        <Text>{t('unable_to_load_content')}</Text>
      </View>
    );
  }, []);

  const renderListFooter = useCallback(() => {
    return (
      <View style={styles.footerContainer}>
        {currentWidgetIndex !== 0 && (
          <Button
            mode="elevated"
            onPress={onPreviousPressed}
            style={[styles.footerButton, styles.previousButton]}
          >
            <Text variant="bodyLarge">{t('previous')}</Text>
          </Button>
        )}
        <Button
          mode="contained"
          onPress={onNextPressed}
          style={styles.footerButton}
        >
          <Text style={styles.nextButton} variant="bodyLarge">
            {widgetsList && currentWidgetIndex === widgetsList?.length - 1
              ? t('complete')
              : t('next')}
          </Text>
        </Button>
      </View>
    );
  }, [currentWidgetIndex, widgetsList, completedLessonsWidgets]);

  return (
    <SafeAreaView
      edges={theme.safeAreaEdges}
      style={theme.commonStyles.screenContainer}
    >
      <ProgressBar
        progress={
          widgetsList && completedLessonsWidgets?.completedWidgets
            ? completedLessonsWidgets?.completedWidgets / widgetsList?.length
            : 0
        }
        color={theme.colors.primary}
        style={styles.progressBar}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          ref={listRef}
          data={widgetsList ?? []}
          contentContainerStyle={styles.listContainer}
          renderItem={renderItem}
          getItemLayout={(data, index) => ({
            length: theme.screenWidth,
            offset: theme.screenWidth * index,
            index,
          })}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={initialListIndex}
        />
      </ScrollView>
      {renderListFooter()}
      {(isLoading || isFetching) && (
        <View style={theme.commonStyles.absoluteCentered}>
          <ActivityIndicator animating={isLoading || isFetching} />
        </View>
      )}
      <InfoModal
        onDismiss={() => setShowErrorModal(false)}
        visible={showErrorModal}
        message={t('something_went_wrong')}
      />
    </SafeAreaView>
  );
};

export default LessonDetails;
