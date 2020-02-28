import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity, Modal,Keyboard, TouchableWithoutFeedback  } from 'react-native';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../shared/Card'
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Aladin', rating: 5, body: 'lorem ipsum', key: '2' },
    { title: 'el Che', rating: 2, body: 'lorem ipsum', key: '3' },
    { title: 'Something', rating: 1, body: 'lorem ipsum', key: '4' },
    { title: 'Another thing', rating: 3, body: 'lorem ipsum', key: '5' },
  ])
  const [modal, setModal] = useState(false)
  const addReview = review => {
     review.key = Math.random().toString()
    setReviews([review,...reviews])
    setModal(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modal} animationType='slide'  >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            onPress={() => setModal(false)}
            style={{...styles.modalToggle,marginTop:17}} />
            <ReviewForm  addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={29}
        onPress={() => setModal(true)}
        style={styles.modalToggle} />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card >
              <Text style={globalStyles.titleText}> {item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalToggle:{
    alignSelf:'center',
    borderColor:'grey',
    marginBottom:18,
    padding:10,
    borderRadius:5
  },
  modalContent:{
    flex:1
  }
});
