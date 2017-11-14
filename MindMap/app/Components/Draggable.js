import React, { Component, } from 'react'
import { Alert, View, Text, StyleSheet, Button, TouchableHighlight, TextInput } from 'react-native'

class Draggable extends Component {
  render() {
    return (
        <View style={{backgroundColor: 'blue', flex: 0.5}} >
            <Draggable renderShape='image' imageSource={this.state.source} renderSize={80} 
                offsetX={0} offsetY={0}
                pressDragRelease={this._changeFace}
                longPressDrag={()=>console.log('long press')}
                pressDrag={()=>console.log('press drag')}
                pressInDrag={()=>console.log('in press')}
                pressOutDrag={()=>console.log('out press')}
            />  
        </View>
    )}
};

export default Draggable