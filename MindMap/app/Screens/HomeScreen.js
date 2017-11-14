import React, { Component, } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import ListScreen from '../Screens/ListScreen'

class HomeScreen extends Component {

  static propTypes = {}
  static defaultProps = {}
  static navigationOptions = {
    title: 'Mind Map',
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Mind Map',
  });

  constructor(props) {
    super(props)
    const items = [
      'Recent project',
      'New project',
      'Saved project',
      'Get external feature',
      'Tutorial',
      'About us',
    ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      items: items,
      dataSource: ds.cloneWithRows({items}),
    };
  }
  
  render() {
    return (
        <ListScreen dataSource={this.state.items} />
    )
  }
}

export default HomeScreen