import * as React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Drawer,
  Text,
} from 'react-native-paper';

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfo}>
        <View>
          <ImageBackground
            style={styles.backgroudIcon}
            source={require('../../img/funky.jpg')}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.iconImage}
                source={require('../../img/profile.jpg')}></Image>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 25, fontWeight: '900', color: 'white'}}>
                  Hi Pam
                </Text>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    backgroundColor: 'skyblue',
                    height: 40,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    View Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View>
        <Drawer.Section >
          <DrawerItem
            icon={({focused}) => {
              let i;

              i = focused
                ? 'https://image.flaticon.com/icons/png/128/1946/1946436.png'
                : 'https://image.flaticon.com/icons/png/128/1946/1946488.png';

              return (
                <Image style={{height: 25, width: 25}} source={{uri: i}} />
              );
            }}
            
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({focused}) => {
              return (
                <Image style={{height: 25, width: 25}} source={{ uri:  focused
                  ? 'https://image.flaticon.com/icons/png/128/2304/2304053.png'
                  : 'https://image.flaticon.com/icons/png/128/2304/2304142.png'}} />
              );
            }}
            
            label="Services"
            onPress={() => {
              props.navigation.navigate('Service');
            }}
          />
          <DrawerItem
             icon={({focused}) => {
              return (
                <Image style={{height: 25, width: 25}} source={{ uri:  focused
                  ? 'https://image.flaticon.com/icons/png/128/4363/4363508.png'
                  : 'https://image.flaticon.com/icons/png/128/4363/4363432.png'}} />
              );
            }}
            label="Channels"
            onPress={() => {
              props.navigation.navigate('Channels');
            }}
          />
          <DrawerItem
             icon={({focused}) => {
              return (
                <Image style={{height: 25, width: 25}} source={{ uri:  focused
                  ? 'https://image.flaticon.com/icons/png/128/1738/1738652.png'
                  : 'https://image.flaticon.com/icons/png/128/1738/1738697.png'}} />
              );
            }}
            label="Articles"
            onPress={() => {
              props.navigation.navigate('Articles');
            }}
          />
          <DrawerItem
            icon={({focused}) => {
              return (
                <Image style={{height: 25, width: 25}} source={{ uri:  focused
                  ? 'https://image.flaticon.com/icons/png/128/2917/2917920.png'
                  : 'https://image.flaticon.com/icons/png/128/2917/2917904.png'}} />
              );
            }}
            label="Fundraising"
            onPress={() => {
              props.navigation.navigate('Fundraising');
            }}
          />
          <DrawerItem
          icon={({focused}) => {
            return (
              <Image style={{height: 25, width: 25}} source={{ uri:  focused
                ? 'https://image.flaticon.com/icons/png/128/121/121729.png'
                : 'https://image.flaticon.com/icons/png/128/446/446072.png'}} />
            );
          }}
            label="Favourite"
            onPress={() => {
              props.navigation.navigate('Favourite');
            }}
          />
          <DrawerItem
           icon={({focused}) => {
            return (
              <Image style={{height: 25, width: 25}} source={{ uri:  focused
                ? 'https://image.flaticon.com/icons/png/128/3524/3524659.png'
                : 'https://image.flaticon.com/icons/png/128/2099/2099058.png'}} />
            );
          }}
            label="Settings"
            onPress={() => {
              props.navigation.navigate('Settings');
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudIcon: {
    height: 150,
    width: 300,
  },
  iconImage: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    margin: 10,
  },
});

export default DrawerContent;
