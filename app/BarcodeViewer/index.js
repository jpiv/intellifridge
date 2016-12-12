import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class BarcodeViewer extends Component {
  cam = null;

  componentDidMount() {
  }

  onRead(data) {
    console.log(data);
  }
  
  render() {
    console.log(Camera.constants.Orientation.landscapeLeft, Camera.constants.Orientation.portrait, Camera.constants.Orientation.landsacpeRight) 
    const st = StyleSheet.create({
      one: {
        flex: 19
      },
      two: {
        width: 400,
        height: 600,
      }
    });
    return (
      <View style={st.one}>
       <Camera orientation={Camera.constants.Orientation.landscapLeft} onBarCodeRead={this.onRead} style={st.two} type={Camera.constants.Type.front} ref={ cam => this.cam = cam } />
      </View>
    );
  }
};
