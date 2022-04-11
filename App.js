import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import AddItem from './components/AddItem';
import AppLoading from 'expo-app-loading';
import ListaScreen from './screen/ListaScreen';
import ModalItem from './components/Modal';
import { useFonts } from 'expo-font';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [mostrarScreen, setMostrarScreen] = useState(true);

  const onHandlerChangeItem = (texto) => setTextItem(texto)

  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) return <AppLoading/>

  const addItem = () => {

    setItemList(currentItems => [...currentItems, {id: counter, value:textItem}])
    setTextItem('')
    setCounter(counter + 1);
    setMostrarScreen(!mostrarScreen);
  }

  const onHandlerDelete = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
    setCounter(counter - 1)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  const onHandlerCloseModal = () => {
    setModalVisible(!modalVisible);
  }

  const onHandlerScreen = () => {
    setMostrarScreen(!mostrarScreen);
  }

  //console.log(mostrarScreen);

  let content;
  if(counter === 2 && mostrarScreen === true) 
    content = <ListaScreen HandlerScreen={onHandlerScreen}/>
  else
  {
    content = (
      <View>
        <AddItem onChange={onHandlerChangeItem} onAddItem={addItem} value={textItem}/>  
        <View style={styles.listaItemContainer}>
          {/*<ScrollView>{
              itemList.map( item => <View style={styles.itemList}><Text onPress={onHandlerModal.bind(this, item.id)}>{item.id} {item.value}</Text></View>)
            }
          </ScrollView>*/}
          <FlatList
            data={itemList}
            renderItem={data => (
              <TouchableOpacity onPress={onHandlerModal.bind(this, data.item.id)}>
                <View>
                  <Text>{data.item.value}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}       
          />
        </View>
        <Text style={styles.TextoDown}>Cantidad de Items en la Lista: {counter}</Text>
        <Text style={styles.TextoDown}>Cada vez que tengas 2 items en la lista, </Text>
        <Text style={styles.TextoDown}>te avisaremos!!</Text>
        <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} closeModal={onHandlerCloseModal}/>
      </View>
    )}
    
    return (
      
      <View  style={styles.container}>
        {content}
      </View>

    );
}

const styles = StyleSheet.create({
  TextoDown: {
    fontSize: 15,
    fontFamily: 'OpenSans'
  },
  screen: {
    padding: 30,
  },
  lista: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#CCCECE",
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  listaItemContainer: {
    backgroundColor: "#CCCECE",
    borderRadius: 10,
    padding: 30,
    width: 300,
    flex: 0.5
  },
  TextInput: {
    backgroundColor: "#EEF3F4",
    width: 170
  }
});

