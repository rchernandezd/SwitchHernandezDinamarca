import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import react from 'react';

const AddItem = (props) => {
    const { onChange, onAddItem, value } = props;

    return (
        <View>
        <View>
            <Text style={{ fontSize: 20, fontFamily: 'OpenSansBold' }}>AGREGA ITEMS</Text>
            <Text>{value}</Text>
        </View><View style={styles.inputContainer}>
                <TextInput placeholder="Item de lista" style={styles.input} value={value} onChangeText={onChange}></TextInput>
                <Button title='ADD' onPress={onAddItem}></Button>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: "#CCCECE",
    padding: 30,
    margin: 10,
    borderRadius: 10
  },
  input: {
    width: 200,
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    backgroundColor: "#EEF3F4"
  },
});

export default AddItem;
