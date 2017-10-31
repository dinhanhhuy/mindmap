import React, { Component, } from 'react'
import { View, Button, ListView, Text } from 'react-native'
import MenuCell from '../Components/MenuCell'

class ListScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.dataSource),
    };
  }
  
  render() {
    return (
      <View style={{backgroundColor: '#ECF2F5'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
        </Text>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <MenuCell text={rowData} />}
        />
      </View>
    )
  }
}

export default ListScreen