import React, { Component, } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import ListScreen from '../Screens/ListScreen'
import MapNode from '../Components/MapNode'

class MapScreen extends Component {

  static propTypes = {}
  static defaultProps = {}
  
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
        <MapNode />
    )
  }
}

export default MapScreen