import * as React from 'react';
import {Text, SafeAreaView, StyleSheet,Image, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

export default class ServiceScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      
        <View >
              <Image style = {styles.ImageIcon} source = {require('../../img/24-hours.png')} />
                <Text style = {styles.Text}> Service Screen</Text>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  ImageIcon : {
    height : 150,
    width :  150,
    marginLeft : 30
  },
  Text : {
   fontWeight : 'bold',
   fontSize : 30
  }

});
 