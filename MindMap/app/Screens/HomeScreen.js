import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'

class HomeScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          Home Screen
        </Text>
      </View>
    )
  }
}

export default HomeScreen