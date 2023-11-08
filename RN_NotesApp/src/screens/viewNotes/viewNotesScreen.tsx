import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {TopLevelContainer} from '../../components';
import {ListItem, EmptyList, Header} from './components';
import {Note} from '../../types';

type Props = {
  data: Note[] | [];
  onPressEdit: (id: string) => void;
  onPressDelete: (id: string) => void;
  onPressAdd: () => void;
};

const ViewNotesScreen = (props: Props) => {
  const {data, onPressEdit, onPressDelete, onPressAdd} = props;

  const keyExtractor = (item: Note, index: any) => item.id + index;

  const renderItem = ({item}: {item: Note}) => {
    return (
      <ListItem
        onPressDelete={onPressDelete}
        onPressEdit={onPressEdit}
        item={item}
      />
    );
  };

  const listEmptyComponent = () => {
    return <EmptyList />;
  };

  const listHeaderComponent = () => {
    return <Header onPress={onPressAdd} />;
  };

  return (
    <TopLevelContainer>
      <View style={styles.main}>
        <FlatList
          id="flex-activity-flatlist"
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          style={styles.listContent}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
          ListEmptyComponent={listEmptyComponent}
          ListHeaderComponent={listHeaderComponent}
        />
      </View>
    </TopLevelContainer>
  );
};

export default ViewNotesScreen;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
  },
  listContent: {
    flexGrow: 1,
    width: '100%',
  },
});
