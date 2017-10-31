import React, { Component, } from 'react'
import { 
    Alert, View, Text, StyleSheet, Button, TouchableHighlight, TextInput, Image
 } from 'react-native'

class MapNode extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  _onPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <View>
      <View style={[styles.draggableContainer, styles.container]} top={30} left={30} >
        <Image
          resizeMode= 'contain'
          style={styles.line}
          source={{
            uri: 'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
          }
        />
        <Text numberOfLines={2} style={styles.text}>
            🍔 This is super Atom 🍔{"\n"}
            Have love bugger with cheese
        </Text>
      </View>

      <View style={[styles.draggableContainer, styles.container]} top={150} left={45} >
        <Image
          resizeMode= 'contain'
          style={styles.line}
          source={{
            uri: 'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
          }
        />
        <Text numberOfLines={2} style={styles.text}>
         🍔 This is super Atom 🍔{"\n"}
          Have love bugger with cheese
        </Text>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  draggableContainer: {
    position: 'absolute',
    height: 80,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    backgroundColor: '#222222',
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#fff'
  },

  line: {
    height: 65,
    width: 65,
    marginLeft: 5,
  },

  touchable: {
    
  },

  text: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default MapNode