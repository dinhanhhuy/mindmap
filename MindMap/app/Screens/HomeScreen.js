import React, { Component, } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import MenuCell from '../Components/MenuCell'

class HomeScreen extends Component {

  static propTypes = {}
  static defaultProps = {}
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Recent project',
        'New project',
        'Saved project',
        'Get external feature',
        'Tutorial',
        'About us']),
    };
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
          Home Screen is awesome
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <MenuCell text='ashdasjhdja lien thanh' />}
        />
      </View>
    )
  }
}

export default HomeScreen