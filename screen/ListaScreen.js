import { Button, Text, View } from 'react-native';

import React from 'react';

const ListaScreen = (props) => {
    const { HandlerScreen } = props;

    return(
        <View>
            <Text>Lista tiene 2 elementos</Text>
            <Button title='Volver' onPress={HandlerScreen.bind(this)}/>
        </View>
    )
}

export default ListaScreen;
