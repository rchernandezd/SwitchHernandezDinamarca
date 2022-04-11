import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import react from 'react';

const ModalItem = (props) => {
    const { visible, onDelete, item, closeModal } = props;


    if (!visible) return null;

    return(
      <Modal animationType="slide" visible={visible}>
         <View  style={styles.modalCentered}>
            <View style={styles.modalView}>
               <View style={styles.modalTitle}>
                  <Text style={styles.textoTitulo}>Mi Modal</Text>
                  <Text style={styles.textoTitulo} onPress={closeModal.bind(this)}>X</Text>
               </View>
               <View style={styles.cuerpoModal}>
                  <View>
                     <Text>¿Estas seguro que deseas borrar?</Text>
                  </View>
                  <View style={styles.modalMessage}>
                     <Text style={styles.modalItem}>{item.value}</Text>
                  </View>
               </View>
               <View style={styles.modalButton}>
                  <Button onPress={onDelete.bind(this, item.id)} title='CONFIRMAR'></Button>
               </View>
            </View>
         </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    modalTitle: {
      flex:2,
      backgroundColor: '#777777',
      width: '100%',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row'
        //backgroundColor: '#CCC',
        //color: 'white',
        //fontSize: 18
      },
      modalMessage: {
        marginBottom: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalButton: {
            flex:2,
            paddingBottom: 15,
            flexDirection: 'row'
      },
      modalItem: {
        fontSize: 20
      },
      textoTitulo: {
         color: 'white',
         fontWeight: 'bold',
         fontSize: 15
       },
       modalCentered: {
         flex: 1, 
         alignItems: 'center',
         justifyContent: 'center'
       },
       modalView: {
         borderWidth: 1,
         borderRadius: 20,
         width: 200,
         height: 200,
         backgroundColor: 'white',
         alignItems: 'center',
         justifyContent: 'center',
         overflow: "hidden"
       },
       cuerpoModal: {
         flex:8,
         justifyContent: 'center',
         alignItems: 'center'
       },
});

export default ModalItem;
