import React, { Component, } from 'react'
import {
  View,
  Text,
  ListView,
  Alert,
} from 'react-native'
import Helper from '../Model/Helper'
import ListScreen from '../Screens/ListScreen'
import NewProjectScreen from './NewProjectScreen'

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
        <ListScreen dataSource={this.state.items} onPressItem={(item) => this.onPressItem(item)}/>
    )
  }

  onPressItem(item) {
    const { navigate } = this.props.navigation;
    console.log(item)

    switch (item) {
      case 'Recent project':
        navigate('MapScreen', {})
        break
      case 'New project':
        navigate('NewProjectScreen', {})
        break
      case 'Saved project':
        navigate('SavedProjectScreen', {})
        break
      case 'Get external feature':
        Alert.alert('Get external feature at\r\nhttps://www.google.com')
        break
      case 'Tutorial':
        navigate('TutorialScreen', {})
        break
      case 'About us':
        Alert.alert('Come and visit us at\r\nhttps://www.google.com')
        break
    }
  }
}

export default HomeScreen