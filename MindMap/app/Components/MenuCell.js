import React, { Component, } from 'react'
import { View, } from 'react-native'
import {TiFolderOpen} from 'react-icons/md';

class MenuCell extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = { text: props.text };
  }

  render() {
    return (
      <View>
        Hello {this.state} hello
      </View>
    )
  }
}

export default MenuCell