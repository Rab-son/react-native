import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/rab.jpeg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/rab.jpeg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/rab.jpeg')
    },


]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;