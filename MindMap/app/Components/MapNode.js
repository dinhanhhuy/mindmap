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
    image = null;
    if (this.props.uri) {
        image = <Image
            resizeMode= 'contain'
            style={styles.line}
            source={{
                uri: this.props.uri
            }}
        />
    }

    return (
        <View style={[styles.draggableContainer, styles.container]} top={this.props.y} left={this.props.x} >
          {image}
          <Text numberOfLines={2} style={styles.text}>
              {this.props.text}
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  draggableContainer: {
    position: 'absolute',
    height: 60,
    width: 150
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
    height: 40,
    width: 40,
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