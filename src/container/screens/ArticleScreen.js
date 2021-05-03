import * as React from 'react';
import {Text, SafeAreaView, StyleSheet, View , Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

export default class ArticleScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <View>
              <Image style = {styles.ImageIcon} source = {{uri : 'https://image.flaticon.com/icons/png/128/2097/2097466.png'}} />
                <Text style = {styles.Text}> Article Screen</Text>
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