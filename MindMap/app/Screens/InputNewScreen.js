import React, { Component, } from 'react'
import {
  View,
  Text,
  ListView,
} from 'react-native'
import ListScreen from '../Screens/ListScreen'
import InputCell from '../Components/InputCell'

class InputNewScreen extends Component {

  static propTypes = {}
  static defaultProps = {}

  static navigationOptions = ({ navigation }) => ({
    title: 'Input new ',
  });

  constructor(props) {
    super(props)
    const items = [
      'Node name',
      'New project',
    ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      items: items,
      dataSource: ds.cloneWithRows({items}),
    };
  }
  
  render() {
    return (
        <View>
          <Text>Create your mindmap</Text>
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
            renderRow={(rowData) => <InputCell text={rowData} />}
          />
      </View>
        </View>
    )
  }
}

export default InputNewScreen