import React, { Component, } from 'react'
import { View, } from 'react-native'
import {TiFolderOpen} from 'react-icons/md';

class MenuCell extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <TiFolderOpen /> Hello {}
      </View>
    )
  }
}

export default MenuCell