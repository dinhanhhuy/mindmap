import React, { Component, } from 'react'
import { View, Button, ListView, Text } from 'react-native'
import MenuCell from '../Components/MenuCell'
import ListScreen from '../Screens/ListScreen'
import Helper from '../Model/Helper'

class SavedProjectScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  static navigationOptions = ({ navigation }) => ({
    title: 'Saved Project',
  });

  constructor(props) {
    super(props)

    const loading = ['loading...']
    const ds      = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      items: loading,
      dataSource: ds.cloneWithRows({items}),
    }

    console.log('loading')
    var items = []
    Helper.projects((projects) => {
      for (var index in projects) {
        var project = projects[index]
        items.push(project['name'])
      }
      console.log(items)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        items: items,
        dataSource: ds.cloneWithRows({items}),
      });
      console.log('update state')
    })
  }
  
  render() {
    console.log('render')
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