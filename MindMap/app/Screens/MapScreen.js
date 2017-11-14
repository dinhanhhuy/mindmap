import React, { Component, } from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Image
} from 'react-native'
import ListScreen from '../Screens/ListScreen'
import MapNode from '../Components/MapNode'
import Dash from 'react-native-dash';

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
      <View>
        <MapNode
        x={200}
        y={100}
        text={"This is Atom\n🐶🐶🐶"}
        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
        />

        <MapNode
        x={300}
        y={150}
        text={"This is Atom\n🐶🐶🐶"}
        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
        />

        <MapNode
        x={400}
        y={200}
        text={"This is Atom\n🐶🐶🐶"}
        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
        />

        <MapNode
        x={500}
        y={250}
        text={"This is Atom\n🐶🐶🐶"}
        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
        />

      </View>
    )

    // return (
    //     <View> 
    //       <MapNode 
    //         x={200}
    //         y={100}
    //         text={"This is Atom\n🐶🐶🐶"}
    //         uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}
    //       />

    //       <Dash 
    //         style={{
    //             width:150, 
    //             height:1,
    //             top:140,
    //             left:200+150
    //         }}/>
          
    //       <Dash 
    //         style={{
    //             width:1, 
    //             height:75,
    //             flexDirection:'column',
    //             top:140,
    //             left:200+150+50
    //         }}/>

    //       <Dash 
    //         style={{
    //             width:75, 
    //             height:1,
    //             top:140,
    //             left:200+150+50
    //         }}/>

    //       <MapNode 
    //         x={450}
    //         y={110}
    //         text={"He can bark\nlike an 🦁🦁🦁"}
    //       />
        
    //       <MapNode 
    //         x={450}
    //         y={30}
    //         text={"He can drink\n🍺🍺🍺"}
    //         uri={'https://dutchbros.com/public/images/drinks/Rebel_Pink_Flamingo_Iced.png'}
    //       />

    //       <Dash 
    //         style={{
    //             width:1, 
    //             height:75,
    //             flexDirection:'column',
    //             top:-10,
    //             left:200+150+50
    //         }}/>

    //       <Dash 
    //         style={{
    //             width:75, 
    //             height:1,
    //             top:-85,
    //             left:200+150+50
    //         }}/>

    //       <MapNode 
    //         x={450}
    //         y={-120}
    //         text={"He like sleep\n😪😪😪"}
    //         uri={'https://static.wixstatic.com/media/5955f2_d11311f83ce04a1a99c2a32a2c807745~mv2.png_256'}
    //       />

    //     </View>
    // )
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  }
});

export default MapScreen