import React, { Component, } from 'react'
import { View, Button, ListView, Text } from 'react-native'
import MenuCell from '../Components/MenuCell'
import ListScreen from '../Screens/ListScreen'

class SavedProjectScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  static navigationOptions = ({ navigation }) => ({
    title: 'Saved Project',
  });

  constructor(props) {
    super(props)
    const items = [
        '12/12/2017 - Alchemid and Gold',
        '12/12/2017 - Push app to store',
        '12/12/2017 - Cook every thing',
        '12/12/2017 - project 4',
        '12/12/2017 - project 5',
        '12/12/2017 - project 6',
        '12/12/2017 - project 7',
        '12/12/2017 - project 8',
        '12/12/2017 - project 9',
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
    navigate('MapScreen', {})
  }
}

export default SavedProjectScreen