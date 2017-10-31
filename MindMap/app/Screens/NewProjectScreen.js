import React, { Component, } from 'react'
import { View, Button, ListView, Text } from 'react-native'
import MenuCell from '../Components/MenuCell'
import ListScreen from '../Screens/ListScreen'

class NewProjectScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  static navigationOptions = ({ navigation }) => ({
    title: 'New Project',
  });

  constructor(props) {
    super(props)
    const items = [
        'Style Circling',
        'Style Pipe',
        'Style Column',
        'Style 4',
        'Style 5',
        'Style 6',
        'Style 7',
        'Style 8',
        'Style 9',
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

export default NewProjectScreen