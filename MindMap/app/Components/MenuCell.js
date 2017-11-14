import React, { Component, } from 'react'
import { Alert, View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'

class MenuCell extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      _onPress: props.onPress,
    };
  }

  _onPress(item) {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <TouchableHighlight 
        onPress={() => this.state._onPress()}
        style={styles.touchable} 
        underlayColor="black">

        <View style={styles.container}>
          <View style={styles.line} />
          <View>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        </View>

      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3B3838',
    height: 40,
    alignItems: 'center',
  },

  line: {
    backgroundColor: '#1DA5CF',
    height: 40,
    width: 4,
    marginLeft: 20,
  },

  touchable: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: '#3B3838',
    height: 40,
    alignItems: 'center',
  },

  text: {
    marginLeft: 10,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default MenuCell